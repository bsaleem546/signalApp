import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC7zwpuIvgj5hUvUgge2aGKyUg2eV5tJ4",
  authDomain: "signal-clone-78af3.firebaseapp.com",
  projectId: "signal-clone-78af3",
  storageBucket: "signal-clone-78af3.appspot.com",
  messagingSenderId: "252519937217",
  appId: "1:252519937217:web:0bf8249962cfd9fae99040"
};

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db ,auth};