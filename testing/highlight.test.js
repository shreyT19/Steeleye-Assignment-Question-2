const highlight = require('./highlight.js');

test('highlightHTMLContent', () => {
    expect(highlight('<p>This is a sample text.</p>', 'This is a sample text.', [{ start: 10, end: 16 }]))
    .toBe('<p>This is a <mark>&lt;mark&gt;sample&lt;/mark&gt;</mark> text.</p>')
})
