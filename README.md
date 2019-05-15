# Purifying HTML in Python3

This shows how to use the npm library [DOMPurify](https://github.com/cure53/DOMPurify) from python3 to sanitize HTML


## Usage
- install the dependencies using `yarn`
- build the javascript part using `yarn build`
- now you can run `dist/main.js` file (which has no dependecies) with node
  - it accepts HTML as input stream and outputs the cleaned HTML
    - bash example: `cat dirty.html | node dist/main.js`
    - there is an python example `example.py` that shows how to run that from python3. node needs to be available in the system path.
  - note: you only need the resulting `main.js`, not the src files. they are just for building the `main.js`
