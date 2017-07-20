import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBv9w6BSNc0D6p5ynaOvLhfJdXsC4R9OmE",
      authDomain: "todo-app-ae84c.firebaseapp.com",
      databaseURL: "https://todo-app-ae84c.firebaseio.com",
      projectId: "todo-app-ae84c",
      storageBucket: "todo-app-ae84c.appspot.com",
      messagingSenderId: "905221013239"
    };

    firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
