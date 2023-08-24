
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCnw-PNRHlfSEdDbjAXRKMhUuHKCPWSykg", 
      authDomain: "adv-c100clase-2faa8.firebaseapp.com", 
      databaseURL: "https://adv-c100clase-2faa8-default-rtdb.firebaseio.com",
      projectId: "adv-c100clase-2faa8", 
      storageBucket: "adv-c100clase-2faa8.appspot.com", 
      messagingSenderId: "166574670917", 
      appId: "1:166574670917:web:c6e0d1cc6e54b574d20f2c", 
      measurementId: "G-PDVQ0Z7ZSX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="BIENVENIDO😒😒"+user_name+"😆";

function addRoom()
{
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location.replace = "kwitter_page.html";
}

function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
console.log("Room name" + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Finaliza el código
      });});}
getRoom();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");

}

function redirectToRoomName(Room_names)
 { console.log(Room_names);
       localStorage.setItem("room_name", Room_names);
        window.location = "kwitter_page.html";
 }

