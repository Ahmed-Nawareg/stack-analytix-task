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


const displayDOM = (docId) => {
    return new Promise((resolve, reject) => {
        const domDocRef = db.collection('capturedDOMs').doc(docId);
        // const iframe = document.querySelector('iframe');
        domDocRef.get().then(doc => {
            if (doc.exists) {
                const domString = doc.data().capturedDoc;
                let iframeContainer = document.getElementById('capturedDOMContainer');
                let iframe = document.createElement('iframe');
                iframe.srcdoc = domString;
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframeContainer.appendChild(iframe);
                
                playWithDom(iframe)
                
                resolve();
            } else {
                console.log('No DOM found in Firestore');
                reject(new Error('No DOM found in Firestore'));
            }
        }).catch(error => {
            console.error('Error getting DOM from Firestore:', error);
            reject(error);
        });
    });
};
