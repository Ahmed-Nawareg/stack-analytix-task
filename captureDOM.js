// Capture DOM and save it to Firestore
const captureDOM = () => {
    let capturedDOM = document.documentElement.outerHTML; // Capture DOM as a string
    db.collection('capturedDOMs').add({ capturedDoc: capturedDOM }) // Save captured DOM to Firestore
        .then(docRef => {
            // Save the document ID in localStorage
            localStorage.setItem('capturedDocId', docRef.id);
            alert(`DOM captured and saved to Firestore with ID: ${docRef.id}`);
            // Redirect to Display Captured DOM page
            window.location.href = 'displayDom.html';
        })
        .catch(error => {
            console.error("Error capturing and saving DOM to Firestore:", error);
        });
}
