// Navigation event listeners

var addRecordBtn = document.getElementById('add');
var homeBtn = document.getElementById('home');
var csvBtn = document.getElementById('file_download');

addRecordBtn.addEventListener('click', function() {
  document.location.href = 'addrecord.html';
});

homeBtn.addEventListener('click', function() {
  document.location.href = 'records.html';
});


// CSV Blob:
//
// var data = //firebase call - once on annotations child
//
// var csvHeaderRow =
//   => string with a join function:
//   ["title","authors"].join("\",\"")
//
// var csvRow += data.rows.join("\",\"") + "\n";
//
// var = myCsvString = csvHeaderRow + "\n" + csvRows
//
// let blob = new Blob(myCsvString)
//
// var objectURL = URL.createObjectURL(blob);
//
//
//
// realFinalHTML = "< a href='" + blobURL   + " ' > download csv < / a >"
