var myFirebase = firebase.database().ref();
var annotations = myFirebase.child("annotations");
var activeKey = location.hash.substr(1);

snapshotToArray = function(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

//Retrieves requested firebase object and populates the record form
pull = function() {

  annotations.once('value', function(snapshot) {
      var data = snapshotToArray(snapshot);
      var record = [];
      for (entry of data) {
        if (entry.key == activeKey) {
          record.push(entry)
        }
      }
      document.getElementById('title').value = record[0].title;
      document.getElementById('authors').value = record[0].authors;
      document.getElementById('year').value = record[0].year;
      document.getElementById('keywords').value = record[0].keywords;
      document.getElementById('annotation').value = record[0].summary;
  });
};

saveBtn.addEventListener('click', function() {

  var title = document.getElementById('title').value;
  var authors = document.getElementById('authors').value;
  var year = document.getElementById('year').value;
  var keywords = document.getElementById('keywords').value;
  var summary = document.getElementById('annotation').value;
  var recordReference = annotations.child(activeKey);

  recordReference.update({
        "title": title,
        "authors": authors,
        "year": year,
        "keywords": keywords,
        "summary": summary
      }).then(function(){
      document.location.href = 'records.html';
    });

    return;
});
