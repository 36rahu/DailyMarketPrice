import requests
from bs4 import BeautifulSoup

url = "https://data.gov.in/sites/default/files/Date-Wise-Prices-all-Commodity.xml"

r = requests.get(url)

while r.status_code is not 200:
        r = requests.get(url)

soup = BeautifulSoup(r.text)
data = soup.find_all("state")
state = list(set(map(str,[i.text for i in data])))
state.sort()
print state