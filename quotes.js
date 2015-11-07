// Night Mode
var quoteBox = document.getElementById("quote-box");
var nightModeButton = document.getElementById("night-button");
nightModeButton.onclick = function(){nightMode()};

function nightMode(){
	if (document.body.className == false){
		document.body.className = "night-mode";
		nightModeButton.style.color="white";
		quoteButton.id = "night-mode-btn-style";
		document.getElementsByTagName("h1")[0].style.color = "white";
		quoteBox.style.boxShadow = "0px 0px";
	}
	else {
		document.body.className = "";
		nightModeButton.style.color="black";
		quoteButton.id = "quote-button";
		document.getElementsByTagName("h1")[0].style.color = "";
		quoteBox.style.boxShadow = "0px 6px 10px gray";
	}
}

// Generate Quote
var quoteButton = document.getElementById("quote-button");
var intro = document.getElementById("intro");
var quoteLine = document.getElementsByClassName("quote");
var speakerLine = document.getElementById("speaker");
quoteButton.onclick = function(){
	decreaseOpacity();
	setTimeout(addQuote, 300);
};


function decreaseOpacity(){
	quoteLine[0].style.opacity = "0";
	speakerLine.style.opacity = "0";
	tweetButton.style.opacity = "0";
	intro.style.display = "none";
}

function addQuote(){
	var quotes = [
		{"speaker":"William Shakespeare", 		"quote":"To be or not to be?"},
		{"speaker":"Travis Bickle",				"quote":"You talking to me?"},
		{"speaker":"SpongeBob SquarePants", 	"quote":"Licking doorknobs is illegal on other planets!"},
		{"speaker":"Rudy Tomjanovich", 			"quote":"Don't ever underestimate the heart of a champion!"},
		{"speaker":"Julius Caesar",				"quote":"Et tu, Brutus?"},
		{"speaker":"CoCo Chanel",  				"quote":"Success is often achieved by those who don't know that failure is inevitable."},
		{"speaker":"John Lennon", 				"quote":"The more I see the less I know for sure."},
		{"speaker":"Bob Dylan",					"quote":"You don't need a weatherman to know which way the wind blows."},
		{"speaker":"Yoda",						"quote":"There is no try, only do."},
		{"speaker":"House Stark",				"quote":"Winter is coming."},
		{"speaker":"Abraham Lincoln",			"quote":"Always bear in mind that your own resolution to succeed, is more important than any other one thing."},
		{"speaker":"The Lorax",					"quote":"It's not about what it is, it's about what it can become."},
		{"speaker":"Frodo",						"quote":"I am glad you are here with me. Here at the end of all things, Sam."},
		{"speaker":"Dale Doback",				"quote":"This is going to sound weird, but for a second, I think you took on the shape of a unicorn."},
		{"speaker":"Shel Silverstein",			"quote":"So just give me a happy middle. And a very happy start."},
		{"speaker":"Charles Barkley",			"quote":"The only difference between a good shot and a bad shot is if it goes in or not."},
		{"speaker":"Henry Hill",				"quote":"For as long as I can remember I always wanted to be a gangster."},
		{"speaker":"T.E. Lawrence",				"quote":"The trick, William Potter, is not minding that it hurts."},
		{"speaker":"Sherif Ali",				"quote":"It seems to me that you are free to choose your own name, then."},
		{"speaker":"Tyra Banks",				"quote":"We were rooting for you! We were all rooting for you!"},
		{"speaker":"Ludwig Mies van der Rohe",	"quote":"It is better to be good than to be original."},
		{"speaker":"Rick Sanchez",				"quote":"Wubba Lubba Dub Dub!"},
		{"speaker":"Ralph Wiggum",				"quote":"My cat's breath smells like cat food."},
		{"speaker":"Nathaniel Hawthorne",		"quote":"No man, for any considerable period, can wear one face to himself, and another to the multitude, without finally getting bewildered as to which may be the true."},
		{"speaker":"George Costanza",			"quote":"I would drape myself in velvet if it were socially acceptable."},
		{"speaker":"Rorschach",					"quote":"No. Not even in the face of Armageddon. Never compromise."},
		{"speaker":"Paul McCartney",			"quote":"And in the end, the love you take is equal to the love you make."},
		{"speaker":"Gen. George S. Patton",		"quote":"Good tactics can save even the worst strategy. Bad tactics will destroy even the best strategy."},
		{"speaker":"William James",				"quote":"There is no more miserable human being than one in whom nothing is habitual but indecision."}
	];

	var quoteIndex = Math.floor(Math.random() * quotes.length);
	currentQuote = quotes[ quoteIndex ];
	quoteLine[0].innerHTML = "\"" + currentQuote.quote + "\"";
	speakerLine.innerHTML = "- " + currentQuote.speaker;
	quoteLine[0].style.opacity = "1";
	speakerLine.style.opacity = "1";
	tweetButton.style.opacity = "1";
	tweetButton.style.display = "inline-block";

}

// Tweet Quote
var tweetButton = document.getElementById("tweet-button");
tweetButton.onclick = function(){tweetQuote()};

//140-5-3-2-16
//1-3-1-1-1-1-1-7-1-7
// "asodifaospjdfaosdjf" - A Name #quotes #soReal
function tweetQuote(){
	// Fix to include speaker even if tweet is too long, may need to make separate function for creating tweet text
	var speakerLength = currentQuote.speaker.length;
	var quoteLength = currentQuote.quote.length + 21;
	if ( (quoteLength + speakerLength) > 140 ){
		var shortenedText = currentQuote.quote.substring(0, (116 - speakerLength));
		var tweetText = '"' + shortenedText + "..." + '"' + " - " + currentQuote.speaker;
	}
	else {
		var tweetText = '"' + currentQuote.quote + '"' + " - " + currentQuote.speaker;
	}
	console.log(speakerLength);
	console.log(quoteLength);
	window.open("https://twitter.com/intent/tweet?text="+tweetText+"&hashtags=quotes,SoReal", "tweetquote", 'width=700,height=250');
}