# Purifying HTML in Python3

- build the javascript part using `yarn build`
- now you can run `dist/main.js` file (which has no dependecies) with node
  - it accepts HTML as input stream and outputs the cleaned HTML
    - bash example: 'cat dirty.html | node dist/main.js`
    - there is an python example `example.py` that shows how to run that from python3
  - node: you only need the resulting `main.js`, not the src files. they are just for building the `main.js`
