$(document).ready (function(){

	var quotes =

	[ 'it\'s like i\'m a developer or something'
	, 'software engineer by night, snorlax by day'
	, 'dream big. think often. eat lots.'
	, 'like jane austen and alan turing made a caffeine addicted baby'
	, 'git add, git commit, git push, git some sleep'
	, 'manhole covers are round because they\'re not edgy enough'
	, 'of course i speak python. hissss'
	];

	var randNum = Math.floor(Math.random() * quotes.length);

	document.getElementById("titleSub").innerHTML = quotes[randNum];
});

