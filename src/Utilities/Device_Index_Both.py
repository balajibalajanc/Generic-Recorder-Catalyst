# import sys
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
str_to="Stereo"
str_in="External"
second="Microphone Array"

result = {}
for i in range(0, numdevices):
    if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
        result[p.get_device_info_by_host_api_device_index(0, i).get('name')]=i

if('External Microphone (Realtek(R)' in result):
    print (result['External Microphone (Realtek(R)'])
else:
    print (result['Microphone Array (2- Intel® Sma'])
print (result['Stereo Mix (Realtek(R) Audio)'])