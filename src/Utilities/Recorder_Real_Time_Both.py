import tkinter as tk
import threading
import pyaudio
import wave
import time
import sys
from pydub import AudioSegment

class App():
    chunk = 2048 
    sample_format = pyaudio.paInt16 
    channels = 2
    fs = 44100
    DEVICE_INDEX=int(sys.argv[1])
    DEVICE_INDEX_s=int(sys.argv[2])
    FILE_NAME="Recording-"
    FILE_NAME_t="Recording-t"
    RESULT_file="Result_recording"
    TIMESTR = time.strftime("%Y-%m-%d--%Hh-%Mm-%Ss")
    WAVE_OUTPUT_FILENAME =FILE_NAME+TIMESTR+".wav"
    WAVE_OUTPUT_FILENAME_t =FILE_NAME_t+TIMESTR+".wav"
    #RESULT_FILE_NAME="target\\"+RESULT_file+TIMESTR+".wav"
    #print(RESULT_FILE_NAME)
    
    
    frames = []
    frames_t=[]  
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
        self.stream_s = self.p.open(format=self.sample_format,channels=self.channels,rate=self.fs,frames_per_buffer=self.chunk,input=True,input_device_index=self.DEVICE_INDEX_s)
        self.label['text']="Recording both System sound and Microphone"
        self.button1['state']='disabled'
        self.button2['state']='normal'
        self.isrecording = True
        t = threading.Thread(target=self.record)
        t.start()

    def stoprecording(self):
        self.label['text']="Done"
        self.isrecording = False
        self.filename = "target\\"+ self.WAVE_OUTPUT_FILENAME
        self.filename_t="target\\"+ self.WAVE_OUTPUT_FILENAME_t
        wf = wave.open(self.filename, 'wb')
        wf.setnchannels(self.channels)
        wf.setsampwidth(self.p.get_sample_size(self.sample_format))
        wf.setframerate(self.fs)
        wf.writeframes(b''.join(self.frames))
        wf.close()
        wf_t = wave.open(self.filename_t, 'wb')
        wf_t.setnchannels(self.channels)
        wf_t.setsampwidth(self.p.get_sample_size(self.sample_format))
        wf_t.setframerate(self.fs)
        wf_t.writeframes(b''.join(self.frames_t))
        wf_t.close()
        print (self.WAVE_OUTPUT_FILENAME)
        print (self.WAVE_OUTPUT_FILENAME_t)
        # sound1 = AudioSegment.from_file(self.filename)
        # sound2 = AudioSegment.from_file(self.filename_t)
        # played_togther = sound1.overlay(sound2)
        # played_togther.export(self.RESULT_FILE_NAME, format="wav")
        main.destroy()

    def record(self):
       
        while self.isrecording:
            data = self.stream.read(self.chunk)
            data_s=self.stream_s.read(self.chunk)
            self.frames.append(data)
            self.frames_t.append(data_s)
		

main = tk.Tk()
main.title('Generic Recorder Catalyst')
main.minsize(width=1050, height=140)
f = tk.Frame(main)
app = App(main)
main.mainloop()