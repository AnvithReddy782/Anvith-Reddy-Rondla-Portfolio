import sys
import re
import urllib.request
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

url = "https://harinisk.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    all_styles = "\n".join(str(s) for s in soup.find_all('style'))
    
    target_divs = [
        'framer-xiSCP', 'framer-72rtr7', 'framer-1480wxc', 'framer-zvg7jo',
        'framer-16utel8', 'framer-1trlnxt', 'framer-m4pb8h-container', 'framer-15ljzpm-container',
        'framer-2geyf1', 'framer-1h3obit', 'framer-y3bf1u-container', 'framer-1lvqi31-container',
        'framer-y4a149', 'framer-2cgg0s', 'framer-1dz31i5-container', 'framer-1j73gpa-container',
        'framer-13au7kc', 'framer-1julder', 'framer-11b8ep6-container', 'framer-gy5ta0-container',
        'framer-a7nbuf-container', 'framer-almlfz-container', 'framer-mvdna3-container', 'framer-7b7k6', 'framer-m5mtk7'
    ]
    
    # Parse media queries blocks
    media_blocks = []
    pos = 0
    while True:
        pos = all_styles.find("@media", pos)
        if pos == -1:
            break
        
        open_brace = all_styles.find("{", pos)
        if open_brace == -1:
            break
            
        brace_count = 1
        i = open_brace + 1
        while brace_count > 0 and i < len(all_styles):
            if all_styles[i] == '{':
                brace_count += 1
            elif all_styles[i] == '}':
                brace_count -= 1
            i += 1
            
        media_name = all_styles[pos:open_brace].strip()
        media_content = all_styles[open_brace+1:i-1]
        media_blocks.append((media_name, media_content))
        pos = i

    global_styles = all_styles
    for mq_name, mq_content in media_blocks:
        global_styles = global_styles.replace(mq_name, "").replace(mq_content, "")
        
    print("--- Detailed Responsive CSS for Home Page Bento ---")
    for cls in target_divs:
        print(f"\n================ Class: .{cls} ================")
        
        # 1. Global styles
        pattern = re.compile(r'\.' + re.escape(cls) + r'\b[^{]*\{([^}]+)\}')
        matches = pattern.findall(global_styles)
        for m in matches:
            print(f"Media Query: None (Default)")
            print(f"  Properties: {m.strip().replace(';', '; ').replace(chr(10), ' ')}")
            
        # 2. Media queries
        for mq_name, mq_content in media_blocks:
            pattern = re.compile(r'\.' + re.escape(cls) + r'\b[^{]*\{([^}]+)\}')
            matches = pattern.findall(mq_content)
            for m in matches:
                print(f"Media Query: {mq_name}")
                print(f"  Properties: {m.strip().replace(';', '; ').replace(chr(10), ' ')}")

except Exception as e:
    print("Error:", e)
