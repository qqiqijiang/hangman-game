/**
 * Created by zhangq2 on 05/12/2017.
 */
"use strict";

var library=["apple","banana","pineapple","strawberry","orange","watermelon","car","plane","truck","bus","bike"];
var table=document.getElementById("guess");
var newword;
var playerlife=5;

//generate a new word
function generate(){
    table.innerHTML="";
    var chooseword = library[Math.floor(Math.random() * library.length)];
    var chosenword=chooseword.replace(/\s/g, "-");
    newword= chosenword.split("");
    var letter=document.createElement("tr");
    for(var i in newword) {
        var cell = document.createElement("td");
        var content = document.createTextNode("__");
        cell.appendChild(content);
        letter.appendChild(cell);
        table.appendChild(letter);
        document.getElementById("life").innerHTML = "You have 5 lives! Get the correct word, or die!";

        //console.log(table);
        //console.log(newword);
    }
}

//get the input letter into checkbox
function btnletter_onclick(event){
    document.getElementById("inputletter").value=event;
    var inputguess = document.getElementById("inputletter").value
    //console.log(inputguess);
}

//check the input letter
function check(){
    var inputguess = document.getElementById("inputletter").value;
    if(newword.indexOf(inputguess)>=0){
        for(var j=0;j<newword.length;j++){
            if(newword[j]===inputguess){
                table.rows[0].cells[j].innerText=inputguess;
                document.getElementById("result").innerHTML="Yeah!";
            }
        }
    }else{
        document.getElementById("result").innerHTML="Try Again!";
        if (playerlife > 1) {
            var leftlife=playerlife-1;
                playerlife--;
                document.getElementById("life").innerHTML = leftlife + " left!";

                var deadman=document.getElementById("image");
                deadman.src="hangman" + (6-leftlife) +".jpg";
            } else if (playerlife === 1) {
                document.getElementById("result").innerHTML = "Game Over!";
                document.getElementById("life").innerHTML = "Ah!!!No!!!";
                deadman.src="hangman" + (6-leftlife) +".jpg";
            console.log(playerlife);
            }
    }
    //console.log(newword.indexOf(inputguess));
}