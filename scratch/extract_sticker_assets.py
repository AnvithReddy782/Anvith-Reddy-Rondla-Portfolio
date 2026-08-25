import re
from bs4 import BeautifulSoup

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
container = soup.find(class_='framer-16utel8')

print("=== Sticker Images ===")
# Find all img tags inside the bento container
for img in container.find_all('img'):
    src = img.get('src', '')
    parent_divs = []
    curr = img.parent
    while curr and curr != container:
        cls = curr.get('class', [])
        if cls:
            parent_divs.append(f"{curr.name}.{'.'.join(cls)}")
        curr = curr.parent
    parent_path = " -> ".join(reversed(parent_divs))
    print(f"Path: {parent_path}")
    print(f"  Src: {src}")
    print()
