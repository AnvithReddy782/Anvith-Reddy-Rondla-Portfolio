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
    
    el = soup.find('div', class_='framer-15ljzpm-container')
    if el:
        print("Found ID Card container:")
        imgs = el.find_all('img')
        for i, img in enumerate(imgs):
            print(f"Img {i}: src={img.get('src')}, alt={img.get('alt')}")
    else:
        print("Could not find ID Card container class framer-15ljzpm-container")
except Exception as e:
    print("Error:", e)
