import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

def print_detail(class_name):
    element = soup.find(class_=class_name)
    print(f"\n================ DETAILS FOR {class_name} ================")
    if not element:
        print("Not found")
        return
    print(f"Tag: <{element.name}>")
    print(f"Classes: {element.get('class', [])}")
    print(f"Style: {element.get('style', '')}")
    # Pretty print the element markup
    print(element.prettify()[:2500])

print_detail("framer-15ljzpm-container") # Hero card
print_detail("framer-m4pb8h-container") # Todo checklist
print_detail("framer-1lvqi31-container") # Clock
print_detail("framer-1j73gpa-container") # Metric panel
print_detail("framer-y3bf1u-container") # Tags
