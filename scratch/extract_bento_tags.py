import json
from bs4 import BeautifulSoup

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

container = soup.find(class_='framer-16utel8')
if not container:
    print("Not found")
    sys.exit(1)

children_info = []

for i, child in enumerate(container.find_all(recursive=False)):
    classes = child.get('class', [])
    style = child.get('style', '')
    
    # We want to traverse nested structures to see how text is structured
    text_content = child.get_text(separator=' | ', strip=True)
    
    # Let's get the tags and their classes/styles inside this child
    sub_elements = []
    for sub in child.find_all(class_=True):
        sub_classes = sub.get('class', [])
        sub_style = sub.get('style', '')
        sub_text = sub.get_text(strip=True)
        if sub_text and len(sub_text) < 150:
            sub_elements.append({
                "tag": sub.name,
                "classes": sub_classes,
                "style": sub_style,
                "text": sub_text
            })
            
    children_info.append({
        "index": i,
        "classes": classes,
        "style": style,
        "text": text_content[:200],
        "sub_elements": sub_elements[:15] # limit to 15 sub-elements
    })

output_path = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\scratch\bento_structure.json"
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(children_info, f, indent=2)

print("Saved bento structure to JSON.")
