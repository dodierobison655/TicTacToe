var turn = "X";
var numbers = ["0","1","2","3","4","5","6","7","8"];
var game = "";
var winturn = "";
var bool = true;
document.getElementById("imgone").style.visibility = "hidden";
document.getElementById("imgtwo").style.visibility = "hidden";
document.getElementById("imgthree").style.visibility = "hidden";
document.getElementById("imgfour").style.visibility = "hidden";
document.getElementById("imgfive").style.visibility = "hidden";
document.getElementById("imgsix").style.visibility = "hidden";
document.getElementById("imgseven").style.visibility = "hidden";
document.getElementById("imgeight").style.visibility = "hidden";
document.getElementById("imgnine").style.visibility = "hidden";
function clicked(clicked_id){
	console.log(clicked_id);
	console.log(document.getElementById("img"+clicked_id).style.visibility);
	if(game!="over" && (document.getElementById("img"+clicked_id).style.visibility === "hidden")){
		console.log("passed");
		document.getElementById("gametext").style.visibility = "hidden";
		document.getElementById("winner").style.visibility = "hidden";
		document.getElementById("img"+clicked_id).src = turn+".png";
		document.getElementById("img"+clicked_id).style.visibility = "visible";
		if(clicked_id == "one"){
			numbers[0] = turn;
		}
		if(clicked_id == "two"){
			numbers[1] = turn;
		}
		if(clicked_id == "three"){
			numbers[2] = turn;
		}
		if(clicked_id == "four"){
			numbers[3] = turn;
		}
		if(clicked_id == "five"){
			numbers[4] = turn;
		}
		if(clicked_id == "six"){
			numbers[5] = turn;
		}
		if(clicked_id == "seven"){
			numbers[6] = turn;
		}
		if(clicked_id == "eight"){
			numbers[7] = turn;
		}
		if(clicked_id == "nine"){
			numbers[8] = turn;
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
	for(var x = 0; x<numbers.length;x++){
		numbers[x] = x.toString();
	}
	game = "";
	winturn = "";
	turn = "X";
	document.getElementById("imgone").style.visibility = "hidden";
	document.getElementById("imgtwo").style.visibility = "hidden";
	document.getElementById("imgthree").style.visibility = "hidden";
	document.getElementById("imgfour").style.visibility = "hidden";
	document.getElementById("imgsix").style.visibility = "hidden";
	document.getElementById("imgseven").style.visibility = "hidden";
	document.getElementById("imgeight").style.visibility = "hidden";
	document.getElementById("imgnine").style.visibility = "hidden";
	document.getElementById("playagain").style.visibility = "hidden";
	document.getElementById("winner").style.visibility = "hidden";
	document.getElementById("gametext").style.visibility = "hidden";
	setTimeout(function(){
		document.getElementById("imgfive").style.visibility = "hidden";
	},1);
}
function gameOver(){
	if(winCheck()||tie()){
		console.log("over");
		game = "over";
		winturn = turn;
		document.getElementById("gametext").innerHTML = "Game Over";
		document.getElementById("gametext").style.visibility = "visible";
		document.getElementById("playagain").style.visibility = "visible";
		setTimeout( function(){
			if(!tie()||winCheck()){
				document.getElementById("winner").innerHTML = winturn + " Wins!";
			} else {
				document.getElementById("winner").innerHTML = "Tie";
			}
			document.getElementById("winner").style.visibility = "visible";
		},500)
	}
}
function tie(){
	bool = true;
	for(var o = 0;o<numbers.length;o++){
		if(numbers[o]!="X"&&numbers[o]!="O"){
			bool = false;
			console.log(bool);
		}
	}
	console.log(bool);
	return bool;
}
function winCheck(){
	if(numbers[0]===numbers[1]&&numbers[1]===numbers[2]||numbers[0]===numbers[4]&&
	numbers[4]===numbers[8]||numbers[1]===numbers[4]&&numbers[4]===numbers[7]||
	numbers[2]===numbers[4]&&numbers[4]===numbers[6]||numbers[3]===numbers[4]&&
	numbers[4]===numbers[5]||numbers[6]===numbers[7]&&numbers[7]===numbers[8]||
	numbers[0]===numbers[3]&&numbers[3]===numbers[6]||numbers[2]===numbers[5]&&
	numbers[5]===numbers[8]){
		return true;
	}else{
		return false;
	}
}
