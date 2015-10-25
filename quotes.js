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
		quoteButton.onclick = function(){addQuote()};

		function addQuote(){
			var quotes = [
				{"speaker":"William Shakespeare", 	"quote":"To be or not to be?"},
				{"speaker":"Travis Bickle",			"quote":"You talking to me?"},
				{"speaker":"SpongeBob SquarePants", "quote":"Licking doorknobs is illegal on other planets!"},
				{"speaker":"Rudy Tomjanovich", 		"quote":"Don't ever underestimate the heart of a champion!"},
				{"speaker":"Julius Caesar",			"quote":"Et tu, Brutus?"},
				{"speaker":"CoCo Chanel",  			"quote":"Success is often achieved by those who don't know that failure is inevitable."},
				{"speaker": "John Lennon", 			"quote":"The more I see the less I know for sure."}, 
			];
			var quoteLine = document.getElementsByClassName("quote");
			var speakerLine = document.getElementById("speaker");
			var quoteIndex = Math.floor(Math.random() * quotes.length);
			currentQuote = quotes[quoteIndex];
			quoteLine[0].innerHTML = "\"" + currentQuote.quote + "\"";
			speakerLine.innerHTML = "- " + currentQuote.speaker;
			tweetButton.style.display = "inline-block";

		}

		// Tweet Quote
		var tweetButton = document.getElementById("tweet-button");
		tweetButton.onclick = function(){tweetQuote()};

		function tweetQuote(){
			var tweetText = '"'+ currentQuote.quote + '"' + " - " + currentQuote.speaker;
			window.open("https://twitter.com/intent/tweet?text="+tweetText+"&hashtags=quotes,SoReal", "tweetquote", 'width=700,height=250');
		}