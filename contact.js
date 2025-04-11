


function query(){


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;




const secretKey = '$2a$10$pQOgIq2QOg86xvUJzMWNLedwaBnUP2a3qKA9ZWNZzJumuU5FdgABi';
const binName= 'myBin';

const data = {
Name: name,
Email: email,
Subject: subject,
Message: message


};

fetch('https://api.jsonbin.io/v3/b', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   "X-Master-Key": secretKey,
   "X-Bin-Private": true,
   'X-Bin-Name': "User Query"
 },
 body: JSON.stringify(data)
})
.then(response => response.json())
.then(jsonData => console.log(jsonData))
.catch(error => console.error(error));

alert("Querry Logged,an agent will contact you soon");

}

