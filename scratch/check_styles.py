import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
styles = soup.find_all('style')
print(f"Found {len(styles)} style tags")
for i, s in enumerate(styles):
    content = s.string or ""
    print(f"Style {i} length: {len(content)}")
    if len(content) > 0:
        # Check if there are some classes in it
        classes = ['framer-zvg7jo', 'framer-1480wxc', 'framer-16utel8']
        for cls in classes:
            if cls in content:
                print(f"  Found class {cls} inside Style {i}")
