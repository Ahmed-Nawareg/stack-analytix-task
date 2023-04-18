// // Get the iframe element
// const iframe = document.querySelector('iframe');

// // Wait for the iframe to load
// iframe.addEventListener('load', () => {
//   // Access the DOM inside the iframe
//   const iframeDoc = iframe.contentDocument;

//   // Get a list of HTML elements from the DOM
//   const elements = iframeDoc.querySelectorAll('*');

//   // Add event listeners for hovering over elements
//   elements.forEach(element => {
//     element.addEventListener('mouseenter', () => {
//       // Draw a rectangle around the element
//       element.style.outline = '2px solid red';
//     });
//     element.addEventListener('mouseleave', () => {
//       // Remove the rectangle when mouse leaves the element
//       element.style.outline = '';
//     });
//   });

//   // Add event listener for deleting elements
//   iframeDoc.addEventListener('click', event => {
//     const target = event.target;
//     // Check if the target element is not the body or the iframe itself
//     if (target !== iframeDoc.body && target !== iframe) {
//       // Remove the target element from the DOM
//       target.remove();
//     }
//   });
// });


const playWithDom = (iframe) => {
    iframe.addEventListener('load', () => {
      const iframeDoc = iframe.contentDocument;
      const elements = iframeDoc.querySelectorAll('*');
      elements.forEach(element => {
          element.addEventListener('mouseenter', () => {
              element.style.outline = '2px solid red';
          });
          element.addEventListener('mouseleave', () => {
              element.style.outline = '';
          });
      });
    });
}

export default playWithDom;