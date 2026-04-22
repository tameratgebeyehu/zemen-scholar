import urllib.request
import re

ids = ['8cWnePbat8Q', 'ryiiSE-0W70', 'Z2thKjG-50w', 'colKxbroT6Q', '4uQeTPj6CXI', 
       'h4D66KbSAB0', '4qPhTEYMq2g', 'IqNoPBgA2aM', 'm5UheLSNX3I', 'csKNtfoMokQ', 
       'l0o5QADecjg', 'UuBcsFen4AU', 'vNh2HOOaj_M', 'eQ5lPmoNysw', 'nqngGKAx3dM', 'k6zsxSmEcyA']

for vid in ids:
    try:
        req = urllib.request.Request(
            f'https://www.youtube.com/watch?v={vid}', 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<title>(.*?)</title>', html)
        title = match.group(1).replace(' - YouTube', '').replace('&amp;', '&').replace('&quot;', '"').replace('&#39;', "'") if match else 'Unknown Title'
        print(f"{{ id: '{vid}', title: \"{title}\" }},")
    except Exception as e:
        print(f"{{ id: '{vid}', title: 'Unknown Title ({e})' }},")
