#このクソコードのことは忘れるのだ。。。

import dropbox
import json
import csv
import shutil
import os

dropbox_access_token=""
client = dropbox.Dropbox(dropbox_access_token)

#ここがQ5
with open("Q5.csv", "wb") as f:

    metadata, res = client.files_download(path="/data/Q5.csv")
    f.write(res.content)
    f.close()
    
json_list = []
with open('Q5.csv', 'r') as f:
    for row in csv.DictReader(f):
        json_list.append(row)

label = ["preschooler","junour12","junour34","junour56","middle1","middle2","middle3","high1","high2","high3"]
dic = {}
cnt = -2
for i,j in json_list[0].items():
    if cnt < 1:
        cnt += 1
        continue
    dic[label[cnt]] = float(j)
    cnt += 1

#ここがQ7
with open("Q7.csv", "wb") as f:

    metadata, res = client.files_download(path="/data/Q7.csv")
    f.write(res.content)
    f.close()

json_list = []
with open('Q7.csv', 'r') as f:
    for row in csv.DictReader(f):
        json_list.append(row)
    f.close()
        
cnt = 0
dic2 = {}
label = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]
for i in json_list:
    dic2[label[cnt]] = float(i["(%)"])
    cnt += 1

#ここがQ7
with open("Q14.csv", "wb") as f:

    metadata, res = client.files_download(path="/data/Q14.csv")
    f.write(res.content)
    f.close()

json_list = []
with open('Q14.csv', 'r') as f:
    for row in csv.DictReader(f):
        json_list.append(row)
    f.close()
cnt = 0
dic3 = {}
for i in json_list:
    dic3[label[cnt] * 2] = float(i["(%)"])
    cnt += 1

# JSON ファイルへの書き込み
output = {"q5":dic,"q7":dic2,"q14":dic3}
with open('output.json', 'w') as f:
    json.dump(output, f)
    f.close()

#ファイル移動
shutil.move("output.json", "output.json")

os.remove('Q14.csv')
os.remove('Q7.csv')
os.remove('Q5.csv')
