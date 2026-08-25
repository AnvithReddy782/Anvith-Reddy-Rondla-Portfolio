import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://harinisk.com/about-me"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    style_text = "\n".join(str(s.string) for s in soup.find_all('style') if s.string)
    
    # Let's search for rules containing 'transform' or 'rotate' or 'deg'
    pattern = re.compile(r'([^{}]*?)\s*\{([^}]+?)\}', re.DOTALL)
    matches = pattern.findall(style_text)
    print(f"Total CSS rules: {len(matches)}")
    
    count = 0
    for selector, body in matches:
        if 'transform' in body or 'rotate' in body or 'deg' in body:
            sel_clean = " ".join(selector.split())
            body_clean = "; ".join([line.strip() for line in body.split(';') if line.strip()])
            # Filter out standard translations if they are too boring
            if 'rotate' in body_clean or 'deg' in body_clean:
                print(f"Selector: {sel_clean}")
                print(f"  Properties: {body_clean}\n")
                count += 1
                
    print(f"Found {count} rules containing rotation/deg.")
    
except Exception as e:
    print("Error:", e)
