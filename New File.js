var dice = {
  sides: 6,
  roll: function () {
    //var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    //return randomNumber;
    return 10
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

document.getElementById("red").style.visibility = "hidden";
document.getElementById("blue").style.visibility = "hidden";
document.getElementById("turn").style.visibility = "hidden";
document.getElementById("redwins").style.visibility = "hidden";
document.getElementById("bluewins").style.visibility = "hidden";
document.getElementById("cross").style.visibility = "hidden";
for (let el of document.querySelectorAll('.cell'))
el.style.visibility = 'hidden';
for (let el of document.querySelectorAll('.questions'))
el.style.visibility = 'hidden';
for (let el of document.querySelectorAll('.buttons'))
el.style.visibility = 'hidden';
var myArray = document.querySelectorAll('.questions');

function RandomQuestion() {
  var answer = 0

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  randomItem.style.visibility = "visible";
  for (let el of document.querySelectorAll('.buttons')){el.style.visibility = 'visible';}
 
 

  if(randomItem.id == "gregorypeck"){
 
  answer = 1;
} else if (randomItem.id == "carryon"){
  answer = 2;
} else if (randomItem.id == "jamesdean"){
  answer = 3;
} else if (randomItem.id == "simongar"){
  answer = 1;
} else if (randomItem.id == "space"){
  answer = 1;
}

 
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
 
  button1.onclick = function(){check(1, answer, randomItem)};
  button2.onclick = function(){check(2, answer, randomItem)};
  button3.onclick = function(){check(3, answer, randomItem)};
 
 
}

 
function check(userinput, answer, randomItem){
  if(userinput == answer){
    randomItem.style.visibility = "hidden";
    iscorrect(true)
 
  }else{document.getElementById("cross").style.visibility = "visible";
  setTimeout(continueExecution, 300)
  function continueExecution(){
  document.getElementById("cross").style.visibility = "hidden";
  randomItem.style.visibility = "hidden"}
  iscorrect(false)
 
  }
 
}


function iscorrect(correct){
  if (correct == true){
    lasttotalblue = totalblue - result,
    totalblue = newtotalblue;}
 
  else{
    lasttotalblue = totalblue - result,
    totalblue = lasttotalblue;}

    return totalblue
    return lasttotalblue
  }



var turn = ""

redcounter.onclick = function() {
document.getElementById("redcounter").style.visibility = "hidden";
document.getElementById("bluecounter").style.visibility = "hidden";
document.getElementById("text2").style.visibility = "hidden";
document.getElementById("red").style.visibility = "visible";
document.getElementById("turn").style.visibility = "visible";
document.getElementById("redcountercell0").style.visibility = "visible";
document.getElementById("bluecountercell0").style.visibility = "visible";
turn = "red"
}

bluecounter.onclick = function() {
document.getElementById("bluecounter").style.visibility = "hidden";
document.getElementById("redcounter").style.visibility = "hidden";
document.getElementById("text2").style.visibility = "hidden";
document.getElementById("blue").style.visibility = "visible";
document.getElementById("turn").style.visibility = "visible";
document.getElementById("bluecountercell0").style.visibility = "visible";
document.getElementById("redcountercell0").style.visibility = "visible";
turn = "blue";
}

var totalblue = 0;
var lasttotalblue = 0;
var totalred = 0;
var lasttotalred = 0;

var button = document.getElementById('my_button');
var result = "0"

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
  
  if (turn == "blue") {totalblue += result
    if (totalblue == 10) {RandomQuestion()
      //if (correct == true){
     // totalblue = 69, lasttotalblue = 10 - result, console.log(totalblue);
      //}else{totalblue = lasttotalblue}

  } else if (totalblue == 18) {RandomQuestion(), totalblue = 36, lasttotalblue = 18 - result;
  } else if (totalblue == 33) {RandomQuestion(), totalblue = 8, lasttotalblue = 33 - result;
  } else if (totalblue == 45) {RandomQuestion(), totalblue = 24, lasttotalblue = 45 - result;
  } else if (totalblue == 46) {RandomQuestion(), totalblue = 84, lasttotalblue = 46 - result;
  } else if (totalblue == 63) {RandomQuestion(), totalblue = 38, lasttotalblue = 63 - result;
  } else if (totalblue == 66) {RandomQuestion(), totalblue = 51, lasttotalblue = 66 - result;
  } else if (totalblue == 82) {RandomQuestion(), totalblue = 42, lasttotalblue = 82 - result;
  } else if (totalblue == 99 || totalblue == 100 || totalblue == 101 || totalblue == 102 || totalblue == 103 || totalblue == 104) {document.getElementById("bluewins").style.visibility = "visible";
  } else {lasttotalblue = totalblue - result};
    bluecountermovement(totalblue);
    }
  

  else if (turn == "red") {totalred += result
    if (totalred == 10) {totalred = 69,    lasttotalred = 10 - result, RandomQuestion();
  } else if (totalred == 18) {totalred = 36,    lasttotalred = 18 - result, RandomQuestion();
  } else if (totalred == 33) {totalred = 8,    lasttotalred = 33 - result, RandomQuestion();
  } else if (totalred == 45) {totalred = 24,    lasttotalred = 45 - result, RandomQuestion();
  } else if (totalred == 46) {totalred = 84,    lasttotalred = 46 - result, RandomQuestion();
  } else if (totalred == 63) {totalred = 38,    lasttotalred = 63 - result, RandomQuestion();
  } else if (totalred == 66) {totalred = 51,    lasttotalred = 66 - result, RandomQuestion();
  } else if (totalred == 82) {totalred= 42,    lasttotalred = 82 - result, RandomQuestion();}
    else if (totalred == 99 || totalred == 100 || totalred == 101 || totalred == 102 || totalred == 103 || totalred == 104) {document.getElementById("redwins").style.visibility = "visible";
  }
    else {lasttotalred = totalred - result}
    redcountermovement(totalred);
    }
}





function bluecountermovement(number) {
  
  var combineblue = "bluecountercell" + number;
  document.getElementById(combineblue).style.visibility = "visible";
  var lastcombineblue = "bluecountercell" + lasttotalblue;
  document.getElementById(lastcombineblue).style.visibility = "hidden";
  turnpositionred();
  turn = "red";
  
}

function redcountermovement(number) {
  
  var combinered = "redcountercell" + number;
  document.getElementById(combinered).style.visibility = "visible";
  var lastcombinered = "redcountercell" + lasttotalred;
  document.getElementById(lastcombinered).style.visibility = "hidden";
  turnpositionblue();
  turn = "blue";

 
}

function finishedred() {
  document.getElementById("redwins").style.visibility = "visible";
  var lastcombinered = "redcountercell" + lasttotalred;
  document.getElementById(lastcombinered).style.visibility = "hidden";
}
function finishedblue() {
  document.getElementById("bluewins").style.visibility = "visible";
  var lastcombinered = "bluecountercell" + lasttotalred;
  document.getElementById(lastcombinered).style.visibility = "hidden";
}

function turnpositionblue(){
  document.getElementById("turn").style.marginTop = "19vw";
}

function turnpositionred(){
  document.getElementById("turn").style.marginTop = "21.3vw";
}