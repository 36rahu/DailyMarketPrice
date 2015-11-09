import requests
from bs4 import BeautifulSoup

url = "https://data.gov.in/sites/default/files/Date-Wise-Prices-all-Commodity.xml"

r = requests.get(url)

while r.status_code is not 200:
        r = requests.get(url)
soup = BeautifulSoup(r.text)
        
def stateNames():
        global r,soup
        data = soup.find_all("state")
        state = list(set(map(str,[i.text for i in data])))
        state.sort()
        return state

def valueList():
        global r,soup
        state = stateNames()
        mainData = {}
        data = soup.find_all("table")
        wholedata = [i.find_all(["state","district","market","commodity",\
                         "variety","min_x0020_price","max_x0020_price","modal_x0020_price"]) for i in data]        
        for i in wholedata:
                if mainData.has_key(str(i[0].text)):
                        tempvalue = [str(j.text) for j in i]
                        mainData[str(i[0].text)].append(tempvalue[1:])
                else:
                        tempvalue = [str(j.text) for j in i]
                        mainData[str(i[0].text)] = [tempvalue[1:]]
        return mainData

