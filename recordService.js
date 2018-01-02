var myFirebase = firebase.database().ref();
var annotations = myFirebase.child("annotations");

snapshotToArray = function(snapshot) {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
  };

foundPresent = function(title, data) {

    var objArray = Object.values(data);
    var titles = objArray.map(a => a.title);
    var present = (titles.indexOf(title) > -1);

    if (present == true) {
      return true;
    } else {
      return false;
    };
};

annotations.once('value', function(snapshot) {
    var data = snapshotToArray(snapshot);

    saveBtn.addEventListener('click', function() {

      var title = document.getElementById('title').value;
      var authors = document.getElementById('authors').value;
      var year = document.getElementById('year').value;
      var exists = foundPresent(title, data);

      if (exists == true) {
        alert("This title already exists! Please edit the existing record or create a new one.");
        return;
      } else {
        annotations.push({
            "title": title,
            "authors": authors,
            "year": year
        }).then(function(){
          document.location.href = 'records.html';
        });
        return;
      };
    });
});



// function edit(key, mvName) {
//     var movieName = prompt("Update the movie name", mvName); // to keep things simple and old skool :D
//     if (movieName && movieName.length > 0) {
//         // build the FB endpoint to the item in movies collection
//         var updateMovieRef = buildEndPoint(key);
//         updateMovieRef.update({
//             name: movieName
//         });
//     }
// }
//
function buildEndPoint (key) {
	return new Firebase('https://annotator-dc18f.firebaseio.com/annotations/' + key);
}

function del(key, title) {
    var response = confirm("Are certain about removing \"" + title + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the annotation
        var deleteAnnotation = buildEndPoint(key);
        deleteAnnotation.remove();
    }
}








//use set() for updating e.g. userRef.update({timestamp: 123456789});
//var timestamp = (new Date()).getTime();
// usersRef.update({
//  ‘/someUserKey/lastLogin’: timestamp,
//  ‘/adminLogs/logins/anotherUserKey/lastLogin’: timestamp
// })
// .catch(function (err) {
//  console.log(‘one of these updates failed’, err);
// });

//use remove() for deleting

//fruitRef.orderByKey().equalTo(“5”)  <= target a specific key on a ref
