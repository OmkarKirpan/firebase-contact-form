import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2tN7bFKI-z1BR6_LB_bUmsRKjiqFbpmY",
  authDomain: "imajjooo.firebaseapp.com",
  databaseURL: "https://imajjooo.firebaseio.com",
  projectId: "imajjooo",
  storageBucket: "",
  messagingSenderId: "67929780461",
  appId: "1:67929780461:web:a03f1db2673ee5a0"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const submitContact = contactData => {
  const { name, email, subject, comment } = contactData;
  const collectionRef = firestore.collection("messages");
  console.log(contactData);
  collectionRef
    .add({
      name,
      email,
      subject,
      comment
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

export default firebase;
