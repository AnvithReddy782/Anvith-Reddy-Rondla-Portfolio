import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

container = soup.find(class_='framer-16utel8')
if not container:
    print("Could not find bento container .framer-16utel8")
    sys.exit(1)

children = container.find_all(recursive=False)

# Let's inspect specific groups
print("--- CHILD 0: concentric rainbow bg ---")
print(children[0].prettify()[:1000])

print("\n--- CHILD 1: Todo Checklist ---")
print(children[1].prettify()[:1000])

print("\n--- CHILD 3: ID Card ---")
print(children[3].prettify()[:1500])

print("\n--- CHILD 5: Since When Sticker ---")
print(children[5].prettify()[:1000])

print("\n--- CHILD 6: What do I work on Sticker ---")
print(children[6].prettify()[:1000])

print("\n--- CHILD 8: Marquee box ---")
print(children[8].prettify()[:1000])

print("\n--- CHILD 10: Clock ---")
print(children[10].prettify()[:1000])

print("\n--- CHILD 12: Where am I from Sticker ---")
print(children[12].prettify()[:1000])

print("\n--- CHILD 14: My current to do list Sticker ---")
print(children[14].prettify()[:1000])

print("\n--- CHILD 16: Download resume sticker ---")
print(children[16].prettify()[:1000])

print("\n--- CHILD 18: 3+ Years ---")
print(children[18].prettify()[:1500])
