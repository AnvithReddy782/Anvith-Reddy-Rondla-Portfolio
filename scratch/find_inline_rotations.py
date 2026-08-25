import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_about.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
elements = soup.find_all(True)
print(f"Total elements searched: {len(elements)}")

found = 0
for el in elements:
    style = el.get('style')
    if style and 'rotate' in style:
        cls = el.get('class', [])
        print(f"Tag: <{el.name}> | Classes: {cls} | Style: {style}")
        # print first child text if any
        text = el.get_text(strip=True)[:100]
        print(f"  Text content: {text!r}")
        found += 1

print(f"\nFound {found} elements with inline rotations.")
