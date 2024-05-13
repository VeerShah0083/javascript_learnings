import requests
from bs4 import BeautifulSoup
import csv
url="http://127.0.0.1:5500/index%20(1).html"
r=requests.get(url)
soup=BeautifulSoup(r.text,"html.parser")
name_arr=[]
exp_arr=[]

names=soup.select(".name")

for name in names:
   name_arr.append(name.string)

exps=soup.select(".exp")

for exp in exps:
   exp_arr.append(exp.string)

with open('My_experience.csv',"w",newline="") as csvfile:
   csv_writer=csv.writer(csvfile)
   csv_writer.writerow(['Name','Experience'])
   for name,exp in zip(name_arr,exp_arr):
      data=(name,exp)
      csv_writer.writerow(data)

