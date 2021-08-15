# Python code which will record only system sound only for 10 seconds and return the file name
import pyaudio
import wave
import sys
import time

CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 2
DEVICE_INDEX=1
RATE = 44100
RECORD_SECONDS = 10
FILE_NAME="Recording-"
TIMESTR = time.strftime("%Y-%m-%d--%Hh-%Mm-%Ss")
WAVE_OUTPUT_FILENAME = FILE_NAME+TIMESTR+".wav"

p = pyaudio.PyAudio()

stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                input_device_index=DEVICE_INDEX,
                frames_per_buffer=CHUNK)

print("* recording")

frames = []

for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)


print("* done recording")
print(TIMESTR)
stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close()