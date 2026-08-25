import sys, re
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

found = False
for text in soup.find_all(string=re.compile('What do i work on', re.I)):
    parent = text.parent
    curr = parent
    while curr and curr.name != 'body':
        cls = curr.get('class', [])
        if any('1h3obit' in c for c in cls):
            print("=== Sticker Container (.framer-1h3obit) ===")
            print(f"Tag: <{curr.name}>, Class: {cls}, Style: {curr.get('style')}")
            print(curr.prettify()[:2500])
            found = True
            break
        curr = curr.parent

if not found:
    print("Could not find sticker container with 1h3obit or 'What do i work on'. Let's search generally:")
    for text in soup.find_all(string=re.compile('What do i work on', re.I)):
        print("Text parent:", text.parent.name, text.parent.get('class'))
        print(text.parent.prettify()[:1000])
