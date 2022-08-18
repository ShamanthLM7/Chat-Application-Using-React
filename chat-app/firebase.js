
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'






 export const firebaseConfig = {
    apiKey: "AIzaSyDWgAZGxZij0qytBCvZzg-Lu0HrHlijRyE",
    authDomain: "chat-29563.firebaseapp.com",
    projectId: "chat-29563",
    storageBucket: "chat-29563.appspot.com",
    messagingSenderId: "715411133024",
    appId: "1:715411133024:web:911be32f09b5e007706905"
  };
  let app;
  if(firebase.apps.length==0)
  {
    app = firebase.initializeApp(firebaseConfig)
  }
  else{
    app=firebase.app
  }

  const db = app.firestore;
  
  
  
  

  const auth = firebase.auth();

  export{db,auth}
