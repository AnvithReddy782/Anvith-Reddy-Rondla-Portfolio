import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
clock_div = soup.find('div', class_='framer-1lvqi31-container')
if clock_div:
    print("Found clock container:")
    print(clock_div.prettify()[:3000])
else:
    print("Could not find clock container")
