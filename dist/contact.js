"use strict";

let firebaseConfig = {
  apiKey: "AIzaSyCxGquS0uqj6HRiVzAeV009cA7Ul--ptKQ",
  authDomain: "mvonoconsultants-606e2.firebaseapp.com",
  databaseURL: "https://mvonoconsultants-606e2-default-rtdb.firebaseio.com",
  projectId: "mvonoconsultants-606e2",
  storageBucket: "mvonoconsultants-606e2.appspot.com",
  messagingSenderId: "1008612775779",
  appId: "1:1008612775779:web:047c3310d8a1c48323e556",
};

firebase.initializeApp(firebaseConfig);

//Reference messages collection
let messageRef = firebase.database().ref("messages");

//listen for the send btn
const contactForm = document.querySelector(".contact_form");
contactForm.addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  //get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  //save message
  saveMessage(name, email, phone, message);
  const alert = document.querySelector(".alert");
  alert.style.display = "block";
  setTimeout(function () {
    alert.style.display = "none";
    //clearing all input fields
    contactForm.reset();
  }, 3000);

  //send message to email
  sendEmail(name, email, phone, message);
}

//save message to firebase
function saveMessage(name, email, phone, message) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
  // retrieveMessage();
}

//Retrieve message from firebase
// function retrieveMessage() {
//   let ref = firebase.database().ref("messages");
//   ref.on("value", gotData);
// }

function gotData(data) {
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++) {
    let infoData = keys[i];
    let name = info[infoData].name;
    let email = info[infoData].email;
    let phone = info[infoData].phone;
    let message = info[infoData].message;
    console.log(name, email, phone, message);
  }
}

//send message to email
function sendEmail(name, email, phone, message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "israelmvono@mvonoconsultants.com",
    Password: "2C363187CC9D7D5F7FD5CD3CD4E1893296EF",
    Port: '2525',
    To: "israelmvono@mvonoconsultants.com",
    From: "israelmvono@mvonoconsultants.com",
    Subject: "CLIENT ENQUIRY FROM WEBSITE",
    Body: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`
  }).then((message) => alert(message));
}
