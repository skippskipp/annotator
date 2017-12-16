//Receive User Email & Password from login-form, create or login Firebase user.

var signUpBtn = document.getElementById('signUpBtn');
var signInBtn = document.getElementById('signInBtn');


signUpBtn.addEventListener('click', function() {
  var emailField = document.getElementById('email').value;
  var passwordField = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
    alert('User Created!');
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
    }
  });
});

signInBtn.addEventListener('click', function() {
  var emailField = document.getElementById('email').value;
  var passwordField = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
    document.location.href = 'records.html';
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
    }
  });
});
