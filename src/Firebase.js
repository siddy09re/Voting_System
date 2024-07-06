// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7oMkPLlJ3IVwL1c6y2ut0JSCzFHnIU7M",
  authDomain: "voting-cf524.firebaseapp.com",
  projectId: "voting-cf524",
  storageBucket: "voting-cf524.appspot.com",
  messagingSenderId: "396469635301",
  appId: "1:396469635301:web:6a64c219683cf495e52c0c",
  measurementId: "G-4BF77HX2Z6",
  databaseUrl: 'https://voting-cf524-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);




// You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
// Sign in to Google
// firebase login
// Initiate your project

// Run this command from your app's root directory:
// firebase init
// When you're ready, deploy your web app

// Put your static files (e.g. HTML, CSS, JS) in your app's deploy directory (the default is 'public'). Then, run this command from your app's root directory:
// firebase deploy

// After deploying, view your app at voting-cf524.web.app

// Need help? Take a look at the Hosting docs