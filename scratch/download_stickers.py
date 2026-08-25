import urllib.request
import os

dest_dir = r"c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\portfolio-template\public"

urls = {
    'since_when_arrow.svg': 'https://framerusercontent.com/images/2NrqFEpt7xgEApEBAB2DKyKA.svg',
    'work_star.svg': 'https://framerusercontent.com/images/gpIdCQI8sFkno37RlFIPmo1oqk.svg'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for filename, url in urls.items():
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read()
        dest_path = os.path.join(dest_dir, filename)
        with open(dest_path, 'wb') as f:
            f.write(data)
        print(f"Downloaded and saved {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
