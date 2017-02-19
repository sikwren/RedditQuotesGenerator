//array full of quotes
var quotes = [
	"Years of love have been forgot, in the hatred of a minute - Edgar Allan Poe",
	"We judge ourselves by our intentions and others by their behaviour - Stephen M.R. Covey",
	"If good things lasted forever how would we realize how precious they are - Calvin and Hobbes",
	"Ships are safe in harbor, but that\'s not what ships are built for - John Augustus Shedd",
	"We are all in the gutter, but some of us are looking at the stars - Oscar Wilde",
	"He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee. - Nietzsche",
	"We are what we repeatedly do. Excellence, then, is not an act, but a habit - Aristotle",
	"It is raining and it will continue to rain until the rain is done - Gandalf.",
	"Don\'t waste your time on jealousy. Sometimes you\'re ahead. Sometimes you\'re behind. The race is long. And in the end, it\'s only with yourself. - Mary Schmich",
	"Treat everyone like a gentleman, not because they are, but because you are - Ed Sabol",
	"Do not go gentle into that good night. Rage, rage against the dying of the light. - Dylan Thomas"
]

/*generates random number, largest number equal to amount of quotes in array*/
function newQuote () {
	var randNumber = Math.floor(Math.random() * (quotes.length));
	//passes random quote to to value of quoteDisplay html element
	document.getElementById("quotesDisplay").innerHTML = quotes[randNumber];
}
