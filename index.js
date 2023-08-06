// function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {

//   let ans = htmlContent.innerHTML;
//   plainTextPositions.map((item) => {
//     const start = item.start;
//     const end = item.end;
//     const highlightedText = plainText.substring(start, end);

//     var count = 0;
//     var countAns = 0;

//     var low = 0;
//     var high = 0;
//     while (high < plainText.length) {
//       if (plainText[high] === " ") {
//         if (highlightedText === plainText.substring(low, high)) {
//           count++;

//           if (low === start && high === end) {
//             countAns = count;

//             break;
//           }
//         }
//         low = high + 1;
//       }
//       high++;
//     }

//     var low1 = 0;
//     var high1 = 0;

//     var customCount =0;
//     while (high1 < htmlContent.length || customCount==countAns) {
//       if (
//         htmlContent[high1] === " " ||
//         htmlContent[high1] === "<" ||
//         htmlContent[high1] === ">" ||
//         htmlContent[high1] === "/"
//       ) {
//         if(highlightedText === htmlContent.substring(low1,high1)){
//             customCount++;
//           if(countAns== customCount){
//               highSave = high1;
//               lowSave = low1;

//               break;
//           }
//         }
//         low1=high1+1;
//       }
//       high1++;

//     }

//     let highlightedTextHTML = `<mark class="highlighted-text">&lt;mark&gt;${highlightedText}&lt;/mark&gt;</mark>`;

//   const halfPart = ans.substring(0,low1);
//    const restPart = ans.substring(high1,htmlContent.length);

//  const finalAnsNew = halfPart + highlightedTextHTML + restPart;

//  ans =finalAnsNew;

//   });

//   return ans;
// }



// // const ansHtmlContent = document.getElementById("ans");
// // const ans = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
// // ansHtmlContent.innerHTML = ans;

// const htmlContent = document.getElementById("html-content");

// const plainText =
//   "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";

// const plainTextPositions = [
//   {
//     start: 241,
//     end: 247,
//   },
//   {
//     start: 518,
//     end: 525,
//   },
// ];



function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let ans = 0;
  plainTextPositions.forEach((item) => {
    const start = item.start;
    const end = item.end;

    var low = 0;
    var high = 0;

    let count = 0;
    while (count < start) {
      low = htmlContent.indexOf(plainText[count], low + 1);
      count++;
    }

    count = 0;
    while (count < end) {
      high = htmlContent.indexOf(plainText[count], high + 1);
      count++;
    }

    if (low !== -1 && high !== -1) {
      htmlContent =
        htmlContent.slice(0, low + 2) +
        '<mark class="highlighted-text">&lt;mark&gt;' +
        htmlContent.slice(low + 2, high + 2) +
        "&lt;/mark&gt;</mark>" +
        htmlContent.slice(high + 2);
    }
  });
  ans = htmlContent;

  return ans;
}

const htmlContent = `
  <p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>
`;

const textContent = htmlContent.replace(/<\/?[^>]+>/g, " ");

const plainText = textContent.replace(/\s+/g, " ");

const plainTextPositions = [
  {
    start: 241,
    end: 247,
  },
  {
    start: 518,
    end: 525,
  },
];

const ansHtmlContent = document.getElementById("ans");
const ans = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
ansHtmlContent.innerHTML = ans;
