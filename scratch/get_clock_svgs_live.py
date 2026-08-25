import urllib.request
from bs4 import BeautifulSoup

url = "https://harinisk.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    clock = soup.find('div', class_='framer-1lvqi31-container')
    if clock:
        print("CLOCK DIV INNER HTML:")
        print(clock.prettify())
    else:
        print("Clock container not found on live site!")
        
except Exception as e:
    print("Error:", e)
