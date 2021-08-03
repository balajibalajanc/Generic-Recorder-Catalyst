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