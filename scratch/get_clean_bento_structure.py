import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
container = soup.find('div', class_='framer-16utel8')

if container:
    children = container.find_all(recursive=False)
    print(f"Total top-level children: {len(children)}")
    for i, child in enumerate(children):
        cls = child.get('class', [])
        framer_name = child.get('data-framer-name', '')
        # check if it has nested children that might indicate its text or type
        inner_text = child.get_text(strip=True)
        if len(inner_text) > 100:
            inner_text = inner_text[:100] + "..."
        print(f"Child {i}: Classes={cls} | Name={framer_name} | Text={inner_text!r}")
else:
    print("Could not find bento container")
