import requests
from bs4 import BeautifulSoup

url = "https://data.gov.in/sites/default/files/Date-Wise-Prices-all-Commodity.xml"

r = requests.get(url)

while r.status_code is not 200:
        r = requests.get(url)

soup = BeautifulSoup(r.text)
print type(soup)
data = soup.find_all("NewDataSet")
print data