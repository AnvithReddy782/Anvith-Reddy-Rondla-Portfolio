import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://harinisk.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    style_text = "\n".join(str(s.string) for s in soup.find_all('style') if s.string)
    
    # Search for selectors that have '16utel8' or 'zvg7jo'
    # Match any css rule
    pattern = re.compile(r'([^{}]*?(?:16utel8|zvg7jo)[^{}]*?)\s*\{([^}]+)\}', re.DOTALL)
    matches = pattern.findall(style_text)
    print(f"Found {len(matches)} css rules matching 16utel8/zvg7jo:")
    for selector, body in matches:
        print(f"Selector: {selector.strip()}")
        print(f"Body: {body.strip().replace(chr(10), ' ')}")
        print("-" * 30)
        
except Exception as e:
    print("Error:", e)
