import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNTct8W4_krDUzOXBG4ETpLb7K61muVsg",
    authDomain: "sanpham-61ef1.firebaseapp.com",
    databaseURL: "https://sanpham-61ef1.firebaseio.com",
    projectId: "sanpham-61ef1",
    storageBucket: "sanpham-61ef1.appspot.com",
    messagingSenderId: "373331702502",
    appId: "1:373331702502:web:b4eb6c8f2d1275ca314127",
    measurementId: "G-J809KL5H7Z"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
 export const noteData =firebase.database().ref('dataForNote');
 export const cartData =firebase.database().ref('cartProduct');
 export const signupData =firebase.database().ref('signupUser');

