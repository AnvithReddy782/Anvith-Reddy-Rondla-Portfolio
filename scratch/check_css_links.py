import bs4

html_path = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch\clean_harinisk.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')
links = soup.find_all('link', rel='stylesheet')
print(f"Found {len(links)} stylesheet link tags:")
for i, l in enumerate(links):
    print(f"  Link {i}: href={l.get('href', '')}")

# Also check for style tags, wait, BeautifulSoup might parse them differently if they are nested under head or body, or have attributes
style_tags = soup.find_all('style')
print(f"Found {len(style_tags)} style tags via soup.find_all('style')")

# Let's count how many times '<style' and '<link' appear as substrings in the raw HTML
import re
style_count = len(re.findall(r'<style', html, re.IGNORECASE))
link_count = len(re.findall(r'<link', html, re.IGNORECASE))
print(f"Raw occurrences: <style: {style_count}, <link: {link_count}")
