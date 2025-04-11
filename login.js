


function loginn(){

  var firebaseConfig = {
    apiKey: "AIzaSyD09GeejzBofXCWBs_GBj8rDtIEDHd0O98",
    authDomain: "https://www.google.com",
    projectId: "masele-33a46",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "200216185593",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
          
          window.location.href=("main.html");
          const inputValue = document.getElementById('email').value;
          localStorage.setItem('user', inputValue);
          
      })
      .catch(function(error) {
        console.log(error.message);
          alert("Login failed,make sure you have an active Account");
      });
  
}



  
      



function signUpp(){
    
  var firebaseConfig = {
  apiKey: "AIzaSyD09GeejzBofXCWBs_GBj8rDtIEDHd0O98",
  authDomain: "https://www.google.com",
  projectId: "masele-33a46",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "200216185593",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

  var email = document.getElementById("emailUp").value;
  var password = document.getElementById("passwordUp").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {

        
      alert("Sign up successful!");
      window.location.href=("main.html");
      
    })
    .catch(function(error) {
      console.log(error.message);
    });


           

           var firstName = document.getElementById("firstname").value;
           var lastName = document.getElementById("lastname").value;
           var grade = document.getElementById("grade").value;




    const secretKey = '$2a$10$pQOgIq2QOg86xvUJzMWNLedwaBnUP2a3qKA9ZWNZzJumuU5FdgABi';
    const binName= 'myBin';

    const data = {
    Firstname: firstName,
    Lastname: lastName,
    Grade: grade,
    Email: email

    
  };

   fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": secretKey,
          "X-Bin-Private": true,
          'X-Bin-Name': "New Student"
        },
        body: JSON.stringify(data)
      })
     .then(response => response.json())
     .then(jsonData => console.log(jsonData))
     .catch(error => console.error(error));








}










