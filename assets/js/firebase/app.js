
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9GL8Ziqd4PAca_QZUgMCN0oan_lOqZyQ",
    authDomain: "projeto-ficha-ded.firebaseapp.com",
    projectId: "projeto-ficha-ded",
    storageBucket: "projeto-ficha-ded.appspot.com",
    messagingSenderId: "921470796952",
    appId: "1:921470796952:web:6f53a5409be6f2f2a07ced"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;