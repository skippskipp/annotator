var myFirebase = firebase.database().ref();
var annotations = myFirebase.child("annotations");
var saveBtn = document.getElementById('saveBtn');


saveBtn.addEventListener('click', function() {
  var title = document.getElementById('title').value;
  var authors = document.getElementById('authors').value;
  annotations.push({
      "title": title,
      "authors": authors
  }).then(function(){
    document.location.href = 'records.html';
  });
});
