
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

annotations.on('value', function(snapshot) {
    var data = snapshotToArray(snapshot);
    console.log(data);
    tablePut(data);
});

tablePut = function addTable(data) {
    var objArray = Object.values(data);
    var titles = objArray.map(a => a.title);
    var authors = objArray.map(a => a.authors);
    var years = objArray.map(a => a.year);
    // var dataArray = Object.values(objArray);
    console.log(titles);
    console.log(authors);
    console.log(years);
    var myTableDiv = document.getElementById("database")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    var dataArray = [];

    // table.border = '1'
    table.appendChild(tableBody);

    var heading = new Array()
    heading[0] = "Title"
    heading[1] = "Authors"
    heading[2] = "Year"

    // var stock = new Array ;
    // stock[0] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    // stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    // stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")

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
    for (i = 0; i < titles.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < heading.length; j++) {
            var cell = document.createElement('TD')
            cell.appendChild(document.createTextNode(titles[i]));
            cell.appendChild(document.createTextNode(authors[i]));
            cell.appendChild(document.createTextNode(years[i]));
            tr.appendChild(cell)
        }
        tableBody.appendChild(tr);
      }
    myTableDiv.appendChild(table)
    };
