import tkinter as tk
import threading
import pyaudio
import wave
import time
import sys
from datetime import datetime

class App():
    chunk = 1024 
    sample_format = pyaudio.paInt16 
    channels = 2
    fs = 44100
    DEVICE_INDEX=int(sys.argv[1])
    FILE_NAME="Recording-"
    TIMESTR = time.strftime("%Y-%m-%d--%Hh-%Mm-%Ss")
    WAVE_OUTPUT_FILENAME =FILE_NAME+TIMESTR+".wav"
    
    
    
    frames = []  
    def __init__(self, master):
        self.isrecording = False
        self.button1 = tk.Button(main, text='Start Recording',command=self.startrecording)
        self.button2 = tk.Button(main, text='Stop Recording',state='disabled',command=self.stoprecording)
        self.label = tk.Label(main, text="Welcome!", fg="black", font="Verdana 30 bold")
        self.label.pack()
        f.pack(anchor = 'center',pady=5)
        self.button1.pack()
        self.button2.pack()

    def startrecording(self):
        self.p = pyaudio.PyAudio()  
        self.stream = self.p.open(format=self.sample_format,channels=self.channels,rate=self.fs,frames_per_buffer=self.chunk,input=True,input_device_index=self.DEVICE_INDEX)
        self.label['text']="Recording "+str(sys.argv[2])
        self.button1['state']='disabled'
        self.button2['state']='normal'
        self.isrecording = True
        t = threading.Thread(target=self.record)
        t.start()

    def stoprecording(self):
        self.label['text']="Done"
        self.isrecording = False
        self.filename = "target\\"+ self.WAVE_OUTPUT_FILENAME
        wf = wave.open(self.filename, 'wb')
        wf.setnchannels(self.channels)
        wf.setsampwidth(self.p.get_sample_size(self.sample_format))
        wf.setframerate(self.fs)
        wf.writeframes(b''.join(self.frames))
        wf.close()
        print(self.WAVE_OUTPUT_FILENAME)
        main.destroy()
    def record(self):
       
        while self.isrecording:
            data = self.stream.read(self.chunk)
            self.frames.append(data)
		

main = tk.Tk()
main.title('Generic Recorder Catalyst')
main.minsize(width=1050, height=140)
f = tk.Frame(main)
app = App(main)
main.mainloop()