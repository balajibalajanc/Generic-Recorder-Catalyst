import wave
import contextlib
import os
from pathlib import Path
import sys
from pydub import AudioSegment
import time

fileDir = os.path.dirname(os.path.realpath('__file__'))
filename= Path(fileDir)

path_tar='target\\'
path_loc=path_tar + str(sys.argv[1])
path_loc_t=path_tar + str(sys.argv[2])
SubDeskTop = Path.joinpath(filename, path_loc)
SubDeskTop_t = Path.joinpath(filename, path_loc_t)
path=os.path.normpath(str(SubDeskTop))
path_t=os.path.normpath(str(SubDeskTop_t))

RESULT_file="Result_recording"
TIMESTR = time.strftime("%Y-%m-%d--%Hh-%Mm-%Ss")
RESULT_FILE_NAME=RESULT_file+TIMESTR+".wav"
print(RESULT_FILE_NAME)
path_loc_b=path_tar + RESULT_FILE_NAME
SubDeskTop_b = Path.joinpath(filename, path_loc_b)
path_b=os.path.normpath(str(SubDeskTop_b))


sound1 = AudioSegment.from_file(path)
sound2 = AudioSegment.from_file(path_t)
played_togther = sound1.overlay(sound2)
played_togther.export(path_b, format="wav")
 



#filenames = os.path.join(filename, 'target/output.wav')
#print(os.path.exists(os.path.normpath(str(SubDeskTop))))
# prints parent directory
# filename=os.path.abspath(os.path.join(path, os.pardir))
# print(os.path.join(filename, "/target", "file.txt"))

# with contextlib.closing(wave.open(path,'r')) as f:
#     frames = f.getnframes()
#     rate = f.getframerate()
#     duration = frames / float(rate)
#     print(duration)