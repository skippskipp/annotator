var myFirebase = firebase.database().ref();
var annotations = myFirebase.child("annotations");

//Fetches snapshot of Firebase data and converts into an array of annotation objects
snapshotToArray = function(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

//Receives the Firebase data snapshot as an array and builds the HTML table with values of interest.
tablePut = function addTable(data) {

    var myTableDiv = document.getElementById("database")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.appendChild(tableBody);

    //TABLE COLUMN HEADERS
    var heading = new Array()
    heading[0] = "Title"
    heading[1] = "Authors"
    heading[2] = "Year"

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (entry of data) {
      var tr = document.createElement('TR');
      var titleCell = document.createElement('td');
      titleCell.textContent = entry.title;
      tr.appendChild(titleCell);

      var authorCell = document.createElement('td');
      authorCell.textContent = entry.authors;
      tr.appendChild(authorCell);

      var yearCell = document.createElement('td');
      yearCell.textContent = entry.year;
      tr.appendChild(yearCell);
      tableBody.appendChild(tr);
      }

    myTableDiv.appendChild(table);
    };

//Calls the `tablePut` function on the Firebase snapshot.
annotations.on('value', function(snapshot) {
    var data = snapshotToArray(snapshot);
    tablePut(data);
});
