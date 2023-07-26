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
     user_name= localStorage.getItem("user_name")
     room_name= localStorage.getItem("roomname")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 nameuser=message_data["name"]
 message=message_data["message"]
 like=message_data["like"]
 nametag="<h4>"+nameuser+"<img src='tick.png'class='user_tick'>"+"</h4>"
 messagetag="<h4 class='message_h4'>"+message+"</h4>"
 liketag="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"oncilck='updata(this.id)'">"
spantag="<span class='glyphicon glyphicon-thumbs_up'like->"+like+"</span></button></hr>"
rowtag=nametag+messagetag+liketag+spantag
document.getElementById("").innerHTML=rowtag
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("roomname")
      localStorage.removeItem("user_name")
      window.location="index.html"
   }
   function Send(){
    msg=document.getElementById("Message").value
    firebase.database().ref(room_name).set({
      name:user_name,
      message:msg,
      like:0
    })
    document.getElementById("Message").value=""
   }
   function updata(message.id){
buttonid=messsag_id
like=document.getElementById("button_id").value
updatalike=Number(like)+1
firebase.database().ref(room_name).child(messsag_id).updata({
      like:updatalike
})
   }