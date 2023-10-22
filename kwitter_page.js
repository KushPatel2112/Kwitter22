//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDipmwVL08FvOVu2a76ngTcTn_pEtdOZlk",
      authDomain: "projectme-a8c56.firebaseapp.com",
      databaseURL: "https://projectme-a8c56-default-rtdb.firebaseio.com",
      projectId: "projectme-a8c56",
      storageBucket: "projectme-a8c56.appspot.com",
      messagingSenderId: "1015819963138",
      appId: "1:1015819963138:web:8f081791525258e26a501b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
function logout()
{
   localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}