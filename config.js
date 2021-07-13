import firebase from 'firebase';
require('@firebase/firestore') 

 const firebaseConfig = {
    apiKey: "AIzaSyAQvKo58dEBkjWDwfZ9ZXlEK-4IJaOhBMI",
    authDomain: "book-santa-9052c.firebaseapp.com",
    projectId: "book-santa-9052c",
    storageBucket: "book-santa-9052c.appspot.com",
    messagingSenderId: "674591264690",
    appId: "1:674591264690:web:74fefcb2ceaa3c19755eab"
  };

// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }

export default firebase.firestore();