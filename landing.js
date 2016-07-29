$(document).ready (function(){

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
});

function imageChange(){
	var images =
	[
		{ image: "audrey.jpg"
		, text: "if only"
		}
		,
		{ image: "bernie.jpg"
		, text: "colonel sanders for fried chicken 2k16"
		}
		,
		{ image: "ditto.png"
		, text: "same"
		}
		,
		{ image: "doge.jpg"
		, text: "me"
		}
		,
		{ image: "grumpcat.jpg"
		, text: "on my period"
		}
		,
		{ image: "marinette.png"
		, text:"me during the last hr of a hackathon"
		}
		,
		{ image: "tacobell.jpg"
		,  text: "the happiest place on earth"
		},
		{ image: "tubss.jpg"
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


