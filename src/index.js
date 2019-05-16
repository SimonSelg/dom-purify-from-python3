const createDOMPurify_ = require('dompurify');
const createDOMPurify = createDOMPurify_.default || createDOMPurify_;
const { JSDOM } = require('jsdom');

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

// read input from stdin
let content = '';
process.stdin.resume();
process.stdin.on('data', (buf) => content += buf.toString());
process.stdin.on('end', () => {
    // purify html + output it
    const clean = DOMPurify.sanitize(content);
    console.log(clean);
});
