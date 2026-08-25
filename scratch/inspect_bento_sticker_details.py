import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')

classes = ['framer-2geyf1', 'framer-1h3obit', 'framer-y4a149', 'framer-2cgg0s']

for cls in classes:
    div = soup.find('div', class_=cls)
    if div:
        print(f"\n================ Sticker Class: .{cls} ================")
        print(div.prettify()[:2000])
        print("-" * 50)
    else:
        # Search anywhere in classes
        div = soup.find(class_=cls)
        if div:
            print(f"\n================ Sticker Class (Any): .{cls} ================")
            print(div.prettify()[:2000])
            print("-" * 50)
        else:
            print(f"Could not find class {cls}")
