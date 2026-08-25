import urllib.request
from bs4 import BeautifulSoup
import os

url = "https://harinisk.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
req = urllib.request.Request(url, headers=headers)

dest_dir = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\portfolio-template\public"

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    # 1. Find SVG for .framer-1svpgvu (Where am I from icon)
    d1 = soup.find(class_='framer-1svpgvu')
    if d1:
        svg = d1.find('svg')
        if svg:
            use = svg.find('use')
            if use:
                href = use.get('href') or use.get('xlink:href')
                if href:
                    sym_id = href.strip('#')
                    symbol = soup.find(id=sym_id)
                    if symbol:
                        inner = "".join(str(c) for c in symbol.contents)
                        viewbox = svg.get('viewBox') or symbol.get('viewBox') or "0 0 100 100"
                        svg_code = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">\n{inner}\n</svg>'
                        out_path = os.path.join(dest_dir, 'where_from_arrow.svg')
                        with open(out_path, 'w', encoding='utf-8') as out_f:
                            out_f.write(svg_code)
                        print("Saved where_from_arrow.svg")
                        
    # 2. Find SVG for .framer-4e9da3 (To do list arrow icon)
    d2 = soup.find(class_='framer-4e9da3')
    if d2:
        svg = d2.find('svg')
        if svg:
            use = svg.find('use')
            if use:
                href = use.get('href') or use.get('xlink:href')
                if href:
                    sym_id = href.strip('#')
                    symbol = soup.find(id=sym_id)
                    if symbol:
                        inner = "".join(str(c) for c in symbol.contents)
                        viewbox = svg.get('viewBox') or symbol.get('viewBox') or "0 0 100 100"
                        svg_code = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">\n{inner}\n</svg>'
                        out_path = os.path.join(dest_dir, 'todo_arrow.svg')
                        with open(out_path, 'w', encoding='utf-8') as out_f:
                            out_f.write(svg_code)
                        print("Saved todo_arrow.svg")
                        
except Exception as e:
    print("Error:", e)
