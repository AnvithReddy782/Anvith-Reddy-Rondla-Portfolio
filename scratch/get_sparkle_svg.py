import bs4
import os

svg_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\used_symbols.svg"
dest_dir = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\portfolio-template\public"

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

soup = bs4.BeautifulSoup(content, 'html.parser')

# We can search for the symbol with id='svg11629501768' or similar
symbol = soup.find(id='svg11629501768')
if not symbol:
    # Try case-insensitive or partial match
    for sym in soup.find_all(True):
        sid = sym.get('id', '')
        if '11629501768' in sid or 'pop-explode' in sid or 'sparkle' in sid.lower():
            symbol = sym
            print(f"Found partial match: {sid}")
            break

if symbol:
    inner_content = "".join(str(c) for c in symbol.contents)
    viewbox = symbol.get('viewBox') or "0 0 100 100"
    svg_code = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" width="100%" height="100%">\n{inner_content}\n</svg>'
    out_path = os.path.join(dest_dir, 'stamp_sparkle.svg')
    with open(out_path, 'w', encoding='utf-8') as out_f:
        out_f.write(svg_code)
    print(f"Saved stamp_sparkle.svg to {out_path}")
else:
    print("Could not find sparkle symbol!")
