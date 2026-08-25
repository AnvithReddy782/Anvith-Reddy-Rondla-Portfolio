import bs4
import os

svg_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\used_symbols.svg"
out_dir = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\portfolio-template\public"

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

soup = bs4.BeautifulSoup(content, 'html.parser')
symbol = soup.find(id='svg-1478557251_2599')

if symbol:
    print("Found symbol svg-1478557251_2599")
    # A symbol usually contains paths or shapes. We wrap it in a proper <svg> tag.
    # We set viewbox to "0 0 70 56" as seen on the live site.
    inner_content = "".join(str(c) for c in symbol.contents)
    svg_code = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 56" width="70" height="56">\n{inner_content}\n</svg>'
    
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, 'folder_icon.svg')
    with open(out_path, 'w', encoding='utf-8') as out_f:
        out_f.write(svg_code)
    print(f"Saved to {out_path}")
else:
    print("Could not find symbol svg-1478557251_2599")
