// Night Mode
var quoteBox = document.getElementById("quote-box");
var nightModeButton = document.getElementById("night-button");
nightModeButton.onclick = nightMode;

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
		{"speaker":"William James",				"quote":"There is no more miserable human being than one in whom nothing is habitual but indecision."},
		{"speaker":"Homer Simpson",				"quote":"I am so smart! S-M-R-T!"},
		{"speaker":"Conan O'Brien",				"quote":"Nobody in life gets exactly what they thought they were going to get. But if you work really hard and you're kind, amazing things will happen."},
		{"speaker":"George Washington",			"quote":"Liberty, when it begins to take root, is a plant of rapid growth."},
		{"speaker":"Frank Lloyd Wright",		"quote":"Form follows function - that has been misunderstood. Form and function should be one, joined in a spiritual union."},
		{"speaker":"Brian Warren",				"quote":"When I say home, I mean the planet I'm from."},
		{"speaker":"Franklin Delano Roosevelt",	"quote":"Happiness lies in the joy of achievement and the thrill of creative effort."},
		{"speaker":"Fiorello H. LaGuardia",		"quote":"Only a well-fed, well-housed, well-schooled people can enjoy the blessings of liberty."},
		{"speaker":"Mel Brooks",				"quote":"As long as the world is turning and spinning, we're gonna be dizzy and we're gonna make mistakes."},
		{"speaker":"Louis CK",					"quote":"I'm bored' is a useless thing to say. You live in a great, big, vast world that you've seen none percent of."},
		{"speaker":"Luke Skywalker",			"quote":"I won't fail you. I'm not afraid."},
		{"speaker":"William Tecumseh Sherman",	"quote":"Courage - a perfect sensibility of the measure of danger, and a mental willingness to endure it."},
		{"speaker":"Martin Luther King Jr.",	"quote":"The arc of the Moral Universe is long but It bends towards Justice."},
		{"speaker":"Father Zosima",				"quote":"I am sorry that I cannot say anything more comforting, for active love is a harsh and fearful thing compared with love in dreams."},
		{"speaker":"Phil Jackson",				"quote":"Love is the force that ignites the spirit and binds teams together."},
		{"speaker":"Franklin Delano Roosevelt",	"quote":"We have nothing to fear but fear itself."},
		{"speaker":"Larry David",				"quote":"I was planning on my future as a homeless person. I had a really good spot picked out."},
		{"speaker":"Napoleon Dynamite",			"quote":"Tina, come get some ham."},
		{"speaker":"Morty",						"quote":"Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?"},
		{"speaker":"Greg Popovich",				"quote":"It's not about any one person. You've got to get over yourself and realize that it takes a group to get this thing done."},
		{"speaker":"Charles Bukowski",			"quote":"An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way."},
		{"speaker":"Bill Gates",				"quote":"Success is a lousy teacher. It seduces smart people into thinking they can't lose."},
		{"speaker":"Walt Disney",				"quote":"We keep moving forward, opening up new doors and doing new things, because we're curious...and curiosity keeps leading us down new paths."},
		{"speaker":"Michael Jordan",			"quote":"I've always believed that if you put in the work, the results will come."},
		{"speaker":"Hayao Miyazaki",			"quote":"Always believe in yourself. Do this and no matter where you are, you will have nothing to fear."},
		{"speaker":"Derek Zoolander",			"quote":"But why male models?"},
		{"speaker":"Jeff Van Gundy",			"quote":"Players with high character get better. Players with a serious approach get better. The fools never get better"},
		{"speaker":"John F. Kennedy",			"quote":"Victory has 100 fathers and defeat is an orphan."},
		{"speaker":"Alexis de Tocqueville",		"quote":"The genius of democracies is seen not only in the great number of new words introduced but even more in the new ideas they express."},
		{"speaker":"Muhammad Ali",				"quote":"I am the greatest, I said that even before I knew I was."},
		{"speaker":"Barack Obama",				"quote":"The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on."},
		{"speaker":"Warren Buffet",				"quote":"You only have to do a very few things right in your life so long as you don't do too many things wrong."},
		{"speaker":"Winston Churchill",			"quote":"If you're going through hell, keep going."},
		{"speaker":"Henry Ford",				"quote":"If I had asked people what they wanted, they would have said faster horses."},
		{"speaker":"Robin Williams",			"quote":"Never pick a fight with an ugly person, they've got nothing to lose."},
		{"speaker":"Alexander Hamilton",		"quote":"Why has government been instituted at all? Because the passions of men will not conform to the dictates of reason and justice, without constraint."},
		{"speaker":"Edgar Allan Poe",			"quote":"Believe nothing you hear, and only one half that you see."},
		{"speaker":"Jon Snow",					"quote":"Winter is almost upon us. Kill the boy and let the man be born."},
		{"speaker":"George W. Bush",			"quote":"You teach a child to read, and he or her will be able to pass a literacy test."},
		{"speaker":"Mark Twain",				"quote":"Always do right. This will gratify some people and astonish the rest."},
		{"speaker":"Julius Caesar",				"quote":"It is better to create than to learn! Creating is the essence of life."},
		{"speaker":"George R.R. Martin",		"quote":"Laughter is poison to fear."},
		{"speaker":"Gen. George S. Patton",		"quote":"Success is how high you bounce when you hit bottom."},
		{"speaker":"Thomas Jefferson",			"quote":"Do you want to know who you are? Don't ask. Act! Action will delineate and define you."},
		{"speaker":"Benjamin Franklin",			"quote":"Genius without education is like silver in the mine."},
		{"speaker":"Bill Gates",				"quote":"Success is a lousy teacher. It seduces smart people into thinking they can't lose."},
		{"speaker":"Tim Duncan",				"quote":"Good, better, best. Never let it rest. Until your good is better and your better is best."},
		{"speaker":"Bill Clinton",				"quote":"In the new economy, information, education, and motivation are everyting."},
		{"speaker":"John Adams",				"quote":"I must study politics and war that my sons may have liberty to study mathematics and philosophy."},
		{"speaker":"Alexander the Great",		"quote":"Remember upon the conduct of each depends the fate of all."},
		{"speaker":"Salvador Dali",				"quote":"Intelligence without ambition is a bird without wings."},
		{"speaker":"Kanye West",				"quote":"I feel like I'm too busy writing history to read it."},
		{"speaker":"Chance the Rapper",			"quote":"This is my part nobody else speak."},
		{"speaker":"Amiri Baraka",				"quote":"Thought is more important than art. To revere art and have no understanding of the process that forces it into existence, is finally not even to understand what art is."}
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


$(document).ready(function(){
	$('body').click(function(){
		$.getJSON('http://openstates.org/api/v1/legislators/geo/?lat=35.79&long=-78.78&apikey=fc3288f6fc76432cab18b7a00cb4f3a9', function(data){
			console.log(data)
		})
	})
})


