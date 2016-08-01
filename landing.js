randNum = 0;

$(document).ready (function(){
	quote();
});

function imageChange(){
	var images =
	[
		{ image: "assets/img/audrey.jpg"
		, text: "if only"
		}
		,
		{ image: "assets/img/bernie.jpg"
		, text: "colonel sanders for fried chicken 2k16"
		}
		,
		{ image: "assets/img/ditto.png"
		, text: "same"
		}
		,
		{ image: "assets/img/doge.jpg"
		, text: "me"
		}
		,
		{ image: "assets/img/grumpcat.jpg"
		, text: "on my period"
		}
		,
		{ image: "assets/img/marinette.png"
		, text:"me during the last hr of a hackathon"
		}
		,
		{ image: "assets/img/tacobell.jpg"
		,  text: "the happiest place on earth"
		}
		,
		{ image: "assets/img/tubss.jpg"
		, text: "i love eating curry"
		}
		,
		{ image: "assets/img/mulan.jpg"
		, text : "i was a fool in school for cutting gym"
		}
	];

	var seqNum;
	var randNum = Math.floor(Math.random() * images.length);

	// to prevent two images in a row, check if the previous image
	// is the image now
	if (seqNum === randNum) {
		randNum += randNum;
	}

	seqNum = randNum;

	document.getElementById('propic').src = images[randNum].image;
	document.getElementById('propic').title = images[randNum].text;
}

function meFunc() {
	$("#textArr").load("assets/pages/me.html");
}

function projects() {
	$("#textArr").load("assets/pages/projects.html");
}

// function other(){
// 	$("#textArr").load("assets/pages/other.html");
// }

function quote (){
	var quotes =
	[ 'it\'s like i\'m a developer or something'
	, 'software engineer by night, snorlax by day'
	, 'dream big. think often. eat lots.'
	, 'like jane austen and alan turing made a caffeine addicted baby'
	, 'git add, git commit, git push, git some sleep'
	, 'manhole covers are round because they\'re not edgy enough'
	, 'of course i speak python. hisssssss'
	];

	var randNum = Math.floor(Math.random() * quotes.length);

	document.getElementById("titleSub").innerHTML = quotes[randNum];
}