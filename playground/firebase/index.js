import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBv9w6BSNc0D6p5ynaOvLhfJdXsC4R9OmE",
    authDomain: "todo-app-ae84c.firebaseapp.com",
    databaseURL: "https://todo-app-ae84c.firebaseio.com",
    projectId: "todo-app-ae84c",
    storageBucket: "todo-app-ae84c.appspot.com",
    messagingSenderId: "905221013239"
  };
  firebase.initializeApp(config);
  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 25
    }
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});
todosRef.push({
  text: 'Todo 2'
});
