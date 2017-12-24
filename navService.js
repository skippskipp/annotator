// Navigation event listeners

var addRecordBtn = document.getElementById('add');
var homeBtn = document.getElementById('home');

addRecordBtn.addEventListener('click', function() {
  document.location.href = 'addrecord.html';
});

homeBtn.addEventListener('click', function() {
  document.location.href = 'records.html';
});
