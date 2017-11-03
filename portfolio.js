var quotes = [' "This is the best site ever!" -important person ' , ' "The cookie recipe is amazing!!!" -famous guy'
				,' "These are some cool things" -the President', ' "Basketball is cool" -NBA player '];

function randomNumber() {
	var x = Math.floor((Math.random() * 4));
	return x;
}
var number = randomNumber();

var quote = quotes[number];

var elName = document.getElementById('testimonial');
elName.textContent = quote;