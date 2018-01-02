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

//Removes a specified item from the DB, reloads page.
del = function(key, title) {
    var response = confirm("Are you sure you want to delete \"" + title + "\" ?");
    if (response == true) {
        annotations.child(key).remove();
        location.reload();
    }
}

genLinks = function(key, title) {
    var links = '';
    links += '<a href="javascript:edit(\'' + key + '\',\'' + title + '\')">View</a> | ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + title + '\')">Delete</a>';
    return links;
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
    heading[3] = "Keywords"
    heading[4] = "View/Update"

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
      tr.setAttribute('data-key', entry.key);
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

      var keywordsCell = document.createElement('td');
      keywordsCell.textContent = entry.keywords;
      tr.appendChild(keywordsCell);
      tableBody.appendChild(tr);

      var linksCell = document.createElement('td');
      linksCell.innerHTML = genLinks(entry.key, entry.title);
      tr.appendChild(linksCell);
      tableBody.appendChild(tr);
      }

    myTableDiv.appendChild(table);
    };

//Calls the `tablePut` function on the Firebase snapshot.
annotations.once('value', function(snapshot) {
    var data = snapshotToArray(snapshot);
    tablePut(data);
});

function buildEndPoint (key) {
	return new Firebase('https://annotator-dc18f.firebaseio.com/annotations/' + key);
}
