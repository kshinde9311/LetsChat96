//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC50folU6hRR7hbzlRGJvFqykmRgVBMil4",
      authDomain: "kwitter-70376.firebaseapp.com",
      databaseURL: "https://kwitter-70376-default-rtdb.firebaseio.com",
      projectId: "kwitter-70376",
      storageBucket: "kwitter-70376.appspot.com",
      messagingSenderId: "164704674601",
      appId: "1:164704674601:web:298bb3b0d9ca0b48fa0d38"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref(+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}