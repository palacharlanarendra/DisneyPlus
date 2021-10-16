// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIUGP58v5VPmjFv4tRn6STTRECT4lhnmo',
  authDomain: 'disneyplusclone-8dfbb.firebaseapp.com',
  projectId: 'disneyplusclone-8dfbb',
  storageBucket: 'disneyplusclone-8dfbb.appspot.com',
  messagingSenderId: '550077472359',
  appId: '1:550077472359:web:d8aaa3d3fecc05fe23bec2',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
console.log(db);
export { auth, provider };
export default db;
