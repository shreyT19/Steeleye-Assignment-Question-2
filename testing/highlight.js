// function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
//   // console.log(htmlContent.innerHTML);
//   let ans = htmlContent;
//   plainTextPositions.map((item) => {
//     const start = item.start;
//     const end = item.end;
//     const highlightedText = plainText.substring(start, end);
//     let highlightedTextHTML = `<mark class="highlighted-text">&lt;mark&gt;${highlightedText}&lt;/mark&gt;</mark>`;
//     // console.log(highlightedTextHTML);
//     ans = ans.replace(highlightedText, highlightedTextHTML);
//   });
//   // console.log(ans);

//   return ans;
// }

// module.exports = { highlightHTMLContent };


function highlightHTMLContentTest(htmlContent, plainText, plainTextPositions) {
    let ans = htmlContent;
    plainTextPositions.forEach((item) => {
      const start = item?.start;
      const end = item?.end;
      const highlightedText = plainText?.substring(start, end);
      let highlightedTextHTML = `<mark>&lt;mark&gt;${highlightedText}&lt;/mark&gt;</mark>`;
      ans = ans?.replace(highlightedText, highlightedTextHTML);
    });
    return ans;
  }

  module.exports =  highlightHTMLContentTest;
//   describe('highlightHTMLContent', () => {
//     test('should highlight plain text within HTML content', () => {
//       const htmlContent = '<p>This is a sample text.</p>';
//       const plainText = 'This is a sample text.';
//       const plainTextPositions = [{ start: 10, end: 16 }];
//       const expectedOutput = '<p>This is a &lt;mark&gt;sample&lt;/mark&gt; text.</p>';
  
//       const result = highlightHTMLContentTest(htmlContent, plainText, plainTextPositions);
//       expect(result).toBe(expectedOutput);
//     });
//   });
  