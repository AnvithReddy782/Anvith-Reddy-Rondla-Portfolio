import shutil
import os

src_dir = r"C:\Users\anvit\.gemini\antigravity\brain\287ec35d-a69c-4e2a-895f-25c12bba37dc\scratch"
dest_dir = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\portfolio-template\public"

files = [
    'stamp_clock_border.svg',
    'stamp_clock_border_small.svg',
    'rainbow_bg.svg',
    'symbol_rainbow.svg'
]

os.makedirs(dest_dir, exist_ok=True)

for f in files:
    src_file = os.path.join(src_dir, f)
    dest_file = os.path.join(dest_dir, f)
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        print(f"Copied {f} to {dest_file}")
    else:
        print(f"Source file {src_file} does not exist!")
