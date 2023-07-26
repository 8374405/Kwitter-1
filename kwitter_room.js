const firebaseConfig = {
      apiKey: "AIzaSyDq_uD_vffqgskqtnTJ6yThMmNctNHqaW0",
      authDomain: "class-93-facec.firebaseapp.com",
      databaseURL: "https://class-93-facec-default-rtdb.firebaseio.com",
      projectId: "class-93-facec",
      storageBucket: "class-93-facec.appspot.com",
      messagingSenderId: "1011881148845",
      appId: "1:1011881148845:web:b83a9a6c1f47e7ff726124",
      measurementId: "G-X4WK7RYLSS"
    };
    firebase. initializeApp(firebaseConfig);

    username=localStorage.getItem(user_name)
    document.getElementById("user_name").innerHTML="welcome"+username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+"oncilck='rediretttoroonname(.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row


      });});}
getData();

function addRoom(){
      roomname=document.getElementById("User_name").value
      firebase.database().ref("/").child(roomname).set({
            purpose:"add room name"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
}      

function rediretttoroonname(name){
      localStorage.setItem("roomname",name)
      window.location="kwitter_page.html"
}
 
function logout(){
   localStorage.removeItem("roomname")
   localStorage.removeItem("user_name")
   window.location="index.html"
}