import json
import csv
import shutil
import requests
import os
from contextlib import closing
from codecs import iterdecode

def download_csv(url: str):
    csv_rows = []
    with closing(requests.get(url, stream=True)) as r:
        reader = (line.decode('cp932') for line in r.iter_lines())
        rows = csv.reader(reader, delimiter=',')
        for row in rows:
            csv_rows.append(row)
    return csv_rows

questionnaire = []
with open('./batch/config.json', 'r', encoding='utf8') as jsonfile:
    questionnaire = json.load(jsonfile)['questionnaire']

obj = {}
for q in questionnaire:
    childObj = {}
    rows = download_csv(q['url'])
    if q['label'] == 'q5':
        for index, column in enumerate(q['json-columns']):
            childObj[column] = float(rows[1][2:][index])
    elif q['label'] == 'q7' or q['label'] == 'q14':
        for index, column in enumerate(q['json-columns']):
            childObj[column] =float(rows[1:][index][1])
    obj[q['label']] = childObj

print('Write output to temp json file ....')
json_obj = json.dumps(obj, indent=2)
with open('output.json.tmp', 'w') as jsonfile:
    jsonfile.write(json_obj)

print('Copy temp json file to json file ....')
shutil.copyfile('output.json.tmp', 'output.json')
os.remove('output.json.tmp')
