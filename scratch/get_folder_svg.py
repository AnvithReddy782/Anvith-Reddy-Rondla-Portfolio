import bs4

svg_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\used_symbols.svg"
with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

soup = bs4.BeautifulSoup(content, 'html.parser')

# Let's search for any SVG or symbol containing 'file' or look at the HTML of child 0 in get_work_folders
# Let's search for the class 'framer-1hwcnql' inside used_symbols.svg or clean_harinisk.html
# Wait! In clean_harinisk.html, the SVG is inline or uses a <use> tag or <svg> tag.
# Let's find child 0 in clean_harinisk.html and print its full SVG contents!
html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup_html = bs4.BeautifulSoup(html, 'html.parser')
folder_div = soup_html.find('div', class_='framer-11b8ep6-container')
if folder_div:
    svg = folder_div.find('svg')
    if svg:
        print("Found SVG inside folder div:")
        print(svg.prettify()[:1500])
        # check if it uses <use href="...">
        use = svg.find('use')
        if use:
            print("SVG uses <use> tag:", use.attrs)
            # Find the symbol in used_symbols.svg matching this use href
            href = use.get('href') or use.get('xlink:href')
            if href:
                symbol_id = href.strip('#')
                print(f"Searching for symbol ID: {symbol_id} inside used_symbols.svg")
                sym = soup.find(id=symbol_id)
                if sym:
                    print("Found symbol in used_symbols.svg:")
                    print(sym.prettify()[:2000])
                else:
                    print("Could not find symbol in used_symbols.svg")
    else:
        print("No SVG inside folder div")
else:
    print("Could not find folder div")
