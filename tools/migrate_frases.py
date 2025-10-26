import re
import json
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'script.js')
DST = os.path.join(os.path.dirname(__file__), '..', 'data', 'frases.json')

with open(SRC, 'r', encoding='utf-8') as f:
    js = f.read()

# Find the inlineFrases array between const inlineFrases = [ and the closing ];
m = re.search(r"const\s+inlineFrases\s*=\s*\[([\s\S]*?)\];", js)
if not m:
    # Try legacy 'const frases = [' pattern
    m = re.search(r"const\s+frases\s*=\s*\[([\s\S]*?)\];", js)
if not m:
    print('Could not find inline phrases array in script.js')
    raise SystemExit(1)

arr_body = m.group(1)

# Extract backtick-delimited template literals
items = re.findall(r"`([\s\S]*?)`,?\s*\n", arr_body)

objects = []

def slugify(s):
    s = s.lower()
    s = re.sub(r"[^a-z0-9\s-]", '', s)
    s = re.sub(r"\s+", '-', s.strip())
    return s

for i, it in enumerate(items):
    text = it.strip()
    # Try to find title between ** **
    title_match = re.search(r"\*\*(.*?)\*\*", text)
    title = None
    emoji = None
    if title_match:
        title = title_match.group(1).strip()
        # prefix before **
        prefix = text[:title_match.start()]
        prefix = prefix.strip()
        # heuristic: last token in prefix that's not empty and short
        tokens = prefix.split()
        if tokens:
            candidate = tokens[-1]
            if len(candidate) <= 3 or not candidate.isalnum():
                emoji = candidate
    else:
        # No bold title, maybe first line is title
        lines = text.split('\n')
        first = lines[0].strip()
        # if the first line has few words, treat as title
        if len(first.split()) <= 5:
            title = first
            text = '\n'.join(lines[1:]).strip()

    # Remove the bold title from text
    if title_match:
        text_clean = text.replace(title_match.group(0), '').strip()
    else:
        text_clean = text

    # Remove leading emoji if present
    if emoji and text_clean.startswith(emoji):
        text_clean = text_clean[len(emoji):].strip()

    # Normalize blank lines
    text_clean = '\n'.join([line.rstrip() for line in text_clean.split('\n') if line.strip()!=''])

    if not title:
        title = (text_clean.split('\n')[0]) if text_clean else f'Frase {i+1}'

    obj = {
        'id': slugify(title),
        'title': title,
        'text': text_clean,
        'emoji': emoji,
        'image': None
    }
    objects.append(obj)

# Write to DST
os.makedirs(os.path.dirname(DST), exist_ok=True)
with open(DST, 'w', encoding='utf-8') as f:
    json.dump(objects, f, ensure_ascii=False, indent=2)

print(f'Wrote {len(objects)} items to {DST}')
