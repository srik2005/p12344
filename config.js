import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyC-gDNHsn9JknTnX5HOcFNFjANvonJZaj0",
  authDomain: "storyhub-be541.firebaseapp.com",
  databaseURL: "https://storyhub-be541.firebaseio.com",
  projectId: "storyhub-be541",
  storageBucket: "storyhub-be541.appspot.com",
  messagingSenderId: "409215737332",
  appId: "1:409215737332:web:aead6cfbc6ad7577a62da1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore(); 