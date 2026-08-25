import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect the entire body for interactive tags, scripts, cursors, or specific classes
print("=== Custom Cursors or Floating Widgets ===")
for tag in soup.find_all(True):
    classes = tag.get('class', [])
    # Check for keywords
    for c in classes:
        if 'cursor' in c.lower() or 'pointer' in c.lower() or 'sticker' in c.lower() or 'floating' in c.lower():
            print(f"Tag: <{tag.name}>, Class: {classes}, Style: {tag.get('style', '')}")

print("\n=== Elements with inline transform/rotate/opacity in original html ===")
# We want to find if there are any rotation properties or custom styles inline
for child in soup.find_all(style=True):
    style = child.get('style', '')
    if 'rotate' in style or 'transform' in style or 'transition' in style:
        classes = child.get('class', [])
        # Only print first few to keep output clean
        text = child.get_text(strip=True)[:50]
        print(f"Tag: <{child.name}>, Classes: {classes}, Style: {style[:150]}, Text: {text!r}")

print("\n=== Inspecting the Finder projects section in live HTML ===")
# Look for projects list, buttons, cards, dragging areas
work_section = soup.find(id=lambda x: x and ('work' in x.lower() or 'project' in x.lower()))
if not work_section:
    # Let's look for sections or divs containing Khyaal, Blubeez or Nonlinear
    for div in soup.find_all('div'):
        txt = div.get_text(strip=True)
        if 'Khyaal' in txt and 'Blubees' in txt:
            work_section = div
            break

if work_section:
    print(f"Found project area: <{work_section.name}> with class {work_section.get('class', [])}")
    # Print sub-elements and coordinates
    for folder in work_section.find_all(class_=True):
        f_classes = folder.get('class', [])
        if any('container' in c or 'item' in c or 'card' in c or 'framer-' in c for c in f_classes):
            txt = folder.get_text(strip=True)[:80]
            if txt:
                print(f"  Folder Node: class={f_classes}, text={txt!r}")
else:
    print("Project/Work area not found by textual search.")
