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
    
    # Check if there is an inline SVG inside the folder div on the live site
    # Let's search for framer-1hwcnql
    divs = soup.find_all(class_='framer-1hwcnql')
    print(f"Found {len(divs)} divs with class framer-1hwcnql on live site.")
    for i, d in enumerate(divs):
        print(f"Div {i}:")
        print(d.prettify()[:1000])
        print("-" * 40)
        
    # Also print any CSS rule matching framer-1hwcnql
    style_text = "\n".join(str(s.string) for s in soup.find_all('style') if s.string)
    pattern = re.compile(r'([^{}]*?1hwcnql[^{}]*?)\s*\{([^}]+?)\}', re.DOTALL)
    matches = pattern.findall(style_text)
    print(f"Found {len(matches)} CSS rules for 1hwcnql:")
    for selector, body in matches:
        print(f"Selector: {selector.strip()}")
        print(f"Body: {body.strip().replace(chr(10), ' ')}")
        print("-" * 30)

except Exception as e:
    print("Error:", e)
