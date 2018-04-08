from glob import glob
from mutagen.easyid3 import EasyID3
for filename in glob('/Users/aryamirshafii/Music/iTunes/iTunes Media/Music/*.mp3'):
    mp3info = EasyID3(filename)
    print mp3info.items()
