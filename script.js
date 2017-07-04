var turn = "X";
var one = "one";
var two = "two";
var three = "three";
var four = "four";
var five = "five";
var six = "six";
var seven = "seven";
var eight = "eight";
var nine = "nine";
var game = "";
var winturn = "";
function clicked(clicked_id){
	if(game!="over" && (document.getElementById("img"+clicked_id).src === "")){
		document.getElementById("gametext").style.visibility = "hidden";
		document.getElementById("winner").style.visibility = "hidden";
		document.getElementById("img"+clicked_id).src = turn+".png";
		if(clicked_id == "one"){
			one = turn;
		}
		if(clicked_id == "two"){
			two = turn;
		}
		if(clicked_id == "three"){
			three = turn;
		}
		if(clicked_id == "four"){
			four = turn;
		}
		if(clicked_id == "five"){
			five = turn;
		}
		if(clicked_id == "six"){
			six = turn;
		}
		if(clicked_id == "seven"){
			seven = turn;
		}
		if(clicked_id == "eight"){
			eight = turn;
		}
		if(clicked_id == "nine"){
			nine = turn;
		}
		gameOver();
		if(turn=="X"){
			turn = "O";
		} else {
			turn = "X";
		}
	}
}
function playAgain(){
	one = "one";
	two = "two";
	three = "three";
	four = "four";
	five = "five";
	six = "six";
	seven = "seven";
	eight = "eight";
	nine = "nine";
	game = "";
	winturn = "";
	turn = "X";
	document.getElementById("imgone").src = "";
	document.getElementById("imgtwo").src = "";
	document.getElementById("imgthree").src = "";
	document.getElementById("imgfour").src = "";
	document.getElementById("imgsix").src = "";
	document.getElementById("imgseven").src = "";
	document.getElementById("imgeight").src = "";
	document.getElementById("imgnine").src = "";
	document.getElementById("playagain").style.visibility = "hidden";
	document.getElementById("winner").style.visibility = "visible";
	document.getElementById("gametext").style.visibility = "hidden";
	setTimeout(function(){
		document.getElementById("imgfive").src = "";
	},1);
}
function gameOver(){
	console.log(one===two===three);
	console.log(one+two+three);
	console.log(one+"|"+two+"|"+three+"|"+four+"|"+five+"|"+six+"|"+seven+"|"+eight+"|"+nine);
	if(one===two&&two===three||one===five&&five===nine||two===five&&five===eight||three===five&&five===seven||four===five&&five===six||seven===eight&&eight===nine||one===four&&four===seven||three===six&&six===nine){
		console.log("over");
		game = "over";
		winturn = turn;
		document.getElementById("gametext").innerHTML = "Game Over";
		document.getElementById("gametext").style.visibility = "visible";
		document.getElementById("playagain").style.visibility = "visible";
		setTimeout( function(){
			document.getElementById("winner").innerHTML = winturn + " Wins!";
			document.getElementById("winner").style.visibility = "visible";
		},500)
	}
}