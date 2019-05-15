import subprocess

def sanitizeHTML(dirty):
  p = subprocess.run(['node', 'dist/main.js'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False, input=dirty.encode())
  if p.stderr or p.returncode:
    return false

  return p.stdout.decode('utf-8').strip()
  
dirty = '<img src=x onerror=alert(1)//>'
result = sanitizeHTML(dirty)
print('sanizized result for "' + dirty + '"')
print(result)
