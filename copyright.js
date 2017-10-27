var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var day = today.getDate();

var copyright = "Copyright: " + month + "-" + day + "-" + year;

var elName = document.getElementById('copyright');
elName.textContent = copyright;