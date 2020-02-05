var dice = {
  sides: 6,
  roll: function () {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
    //return 33
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
  var answer = 0;
  

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
} else if (randomItem.id == "spanish"){
  answer = 3;
} else if (randomItem.id == "penny"){
  answer = 3;
} else if (randomItem.id == "chopin"){
  answer = 3;
} else if (randomItem.id == "fathom"){
  answer = 1;
}

  document.getElementById("button1").onclick = function(){check(1, answer, randomItem)};
  document.getElementById("button2").onclick = function(){check(2, answer, randomItem)};
  document.getElementById("button3").onclick = function(){check(3, answer, randomItem)};
}

 
function check(userinput, answer, randomItem){
  if(userinput == answer){
    randomItem.style.visibility = "hidden";
    if(turn == "red"){iscorrectblue(true)}
    else if (turn == "blue"){iscorrectred(true)}

  }else{document.getElementById("cross").style.visibility = "visible";
  setTimeout(continueExecution, 300)
  function continueExecution(){
  document.getElementById("cross").style.visibility = "hidden";
  randomItem.style.visibility = "hidden"}
  if(turn == "red"){iscorrectblue(false)}
  else if (turn == "blue"){iscorrectred(false)}
  
 
  }
 
}


function iscorrectblue(correct){
  if (correct == true && type == "ladder"){
    lasttotalblue = oldtotalblue - result, bluecountermovement(totalblue);
    }
 
  else if (correct == false && type == "ladder"){
    lasttotalblue = totalblue,
    totalblue = oldtotalblue - result,
    bluecountermovement(totalblue); 
    }

  else if (correct == true && type == "snake"){
    lasttotalblue = totalblue,
    totalblue = oldtotalblue - result,
    bluecountermovement(totalblue); 
    }
  
  else if (correct == false && type == "snake"){
    lasttotalblue = oldtotalblue - result,
    bluecountermovement(totalblue);
  }
    


    return totalblue
    return lasttotalblue
    
  }


function iscorrectred(correct){
  if (correct == true && type == "ladder"){
    lasttotalred = oldtotalred - result, redcountermovement(totalred);
    }
 
  else if (correct == false && type == "ladder"){
    lasttotalred = totalred,
    totalred = oldtotalred - result,
    redcountermovement(totalred);
    }
    
    else if (correct == true && type == "snake"){
    lasttotalred = totalred,
    totalred = oldtotalred - result,
    redcountermovement(totalred); 
    }
  
    else if (correct == false && type == "snake"){
    lasttotalred = oldtotalred - result, redcountermovement(totalred);
  }

    return totalred
    return lasttotalred
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
var oldtotalblue = 0;
var oldtotalred = 0;
var type = ""

var button = document.getElementById('my_button');
var result = 0

button.onclick = function() {
  result = dice.roll();
  printNumber(result);
  
  if (turn == "blue") {totalblue += result
    if (totalblue == 10) {totalblue = 69, oldtotalblue = 10, type = "ladder", RandomQuestion();
  } else if (totalblue == 18) {totalblue = 36, oldtotalblue = 18, type = "ladder", RandomQuestion();
  } else if (totalblue == 33) {totalblue = 8, oldtotalblue = 33, type = "snake", RandomQuestion();
  } else if (totalblue == 45) {totalblue = 24, oldtotalblue = 45, type = "snake", RandomQuestion();
  } else if (totalblue == 46) {totalblue = 84, oldtotalblue = 46, type = "ladder", RandomQuestion();
  } else if (totalblue == 63) {totalblue = 38, oldtotalblue = 63, type = "snake", RandomQuestion();
  } else if (totalblue == 66) {totalblue = 51, oldtotalblue = 66, type = "snake", RandomQuestion();
  } else if (totalblue == 82) {totalblue = 42, oldtotalblue = 82, type = "snake", RandomQuestion();
  } else if (totalblue >= 99) {document.getElementById("bluewins").style.visibility = "visible";
  } else {lasttotalblue = totalblue - result};
    if (totalblue <100){
       bluecountermovement(totalblue);}
    }
  

  else if (turn == "red") {totalred += result
    if (totalred == 10) {totalred = 69, oldtotalred = 10, type = "ladder", RandomQuestion();
  } else if (totalred == 18) {totalred = 36, oldtotalred = 18, type = "ladder", RandomQuestion();
  } else if (totalred == 33) {totalred = 8, oldtotalred = 33, type = "snake", RandomQuestion();
  } else if (totalred == 45) {totalred = 24, oldtotalred = 45, type = "snake", RandomQuestion();
  } else if (totalred == 46) {totalred = 84, oldtotalred = 46, type = "ladder", RandomQuestion();
  } else if (totalred == 63) {totalred = 38, oldtotalred = 63, type = "snake", RandomQuestion();
  } else if (totalred == 66) {totalred = 51, oldtotalred = 66, type = "snake", RandomQuestion();
  } else if (totalred == 82) {totalred = 42, oldtotalred = 82, type = "snake", RandomQuestion();
  } else if (totalred >= 99) {document.getElementById("redwins").style.visibility = "visible";
  }
    else {lasttotalred = totalred - result}
    if (totalred <100){
       redcountermovement(totalred);}
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