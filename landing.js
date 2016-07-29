$(document).ready (function(){
	quote();
});

function imageChange(){
	var images =
	[
		{ image: "img/audrey.jpg"
		, text: "if only"
		}
		,
		{ image: "img/bernie.jpg"
		, text: "colonel sanders for fried chicken 2k16"
		}
		,
		{ image: "img/ditto.png"
		, text: "same"
		}
		,
		{ image: "img/doge.jpg"
		, text: "me"
		}
		,
		{ image: "img/grumpcat.jpg"
		, text: "on my period"
		}
		,
		{ image: "img/marinette.png"
		, text:"me during the last hr of a hackathon"
		}
		,
		{ image: "img/tacobell.jpg"
		,  text: "the happiest place on earth"
		},
		{ image: "img/tubss.jpg"
		, text: "i love eating curry"
		}
	];

	var randNum = Math.floor(Math.random() * images.length);

	//var changedImg = "this.src='"+ images[randNum].image + "';"
	document.getElementById('propic').src = images[randNum].image;
	document.getElementById('propic').title = images[randNum].text;
}

function meFunc() {
	$("#textArr").load("me.html");
}

function projects() {
	$("#textArr").load("projects.html");
}

function other(){
	//nothing here yet
}

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