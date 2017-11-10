var myButton = document.getElementById('filter');
myButton.onclick = function() {
	var items = document.getElementsByClassName('favorite-item');
 items[0].parentNode.removeChild(items[0]);
console.log(items);
}

var myOtherButton = document.getElementById('highlight');
myOtherButton.onclick = function() {
	var items = document.getElementsByClassName('favorite-item');
 items[0].style.backgroundColor = "#F78AC9";
 items[0].style.width = "250px";

}