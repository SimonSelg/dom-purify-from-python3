# Purifying HTML in Python3

This shows how to use the npm javascript library [DOMPurify](https://github.com/cure53/DOMPurify) in python3 to sanitize HTML.

DOMPurify is bundled together with its dependencies into one file, `dist/main.js`. This file has no additional dependencies. 

From python, the bundled domPurify script is run with `node` (nodejs), which needs to be available on the target system. The to be sanitized HTML is passed on `stdin`, the cleaned html is read from `stdout`.

## Usage
- install the dependencies using `yarn`
- build the javascript part using `yarn build`
- use the resulting `dist/main.js` (place it wherever you want, it has no dependencies)
  - check the `example.py` for how to do this from python
  - bash example: `cat dirty.html | node dist/main.js`
  
## Notes