const createDOMPurifyX = require('dompurify');
const createDOMPurify = createDOMPurifyX.default || createDOMPurifyX
const { JSDOM } = require('jsdom');

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

let content = '';
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });
process.stdin.on('end', function() {
    const clean = DOMPurify.sanitize(content);
    console.log(clean);
});
