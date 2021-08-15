import wave
import contextlib
import os
from pathlib import Path

# fileDir = os.path.dirname(os.path.realpath('__file__'))
# filename= Path(fileDir).parent.parent
# #filenames = os.path.join(filename, 'target/output.wav')
# SubDeskTop = Path.joinpath(filename, "target\output.wav")
# path=os.path.normpath(str(SubDeskTop))
# #print(os.path.exists(os.path.normpath(str(SubDeskTop))))

 
# prints parent directory
# filename=os.path.abspath(os.path.join(path, os.pardir))
# print(os.path.join(filename, "/target", "file.txt"))

# with contextlib.closing(wave.open(path,'r')) as f:
#     frames = f.getnframes()
#     rate = f.getframerate()
#     duration = frames / float(rate)
#     print(duration)



import sys
import pyaudio

# from datetime import datetime
# starttime_str = sys.argv[1]
# endtime=sys.argv[2]
# starttime_object = datetime.strptime(starttime_str, '%H:%M:%S').time()
# endtime_object= datetime.strptime(endtime, '%H:%M:%S').time()
# dif =starttime_object - endtime_object
# print(dif);




p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
    if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
        print ("Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name'))


# info = p.get_host_api_info_by_index(0)
# numdevices = info.get('deviceCount')
# for i in range(0, numdevices):
#     if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
#         print(p.get_device_info_by_host_api_device_index(0, i).get('name'))




# import subprocess
# cmd = 'powershell "gps | where {$_.MainWindowTitle } | select Description'
# proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
# for line in proc.stdout:
#         if line.rstrip():
#             print(line.decode().rstrip())
#         # only print lines that are not empty
#         # decode() is necessary to get rid of the binary string (b')
#         # rstrip() to remove `\r\n`
        

# # import os
# # os.system('powershell.exe [Get-AudioDevice -list]')