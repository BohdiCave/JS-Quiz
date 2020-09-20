// Assignment Code
var questions = [
{Question:"What is the most efficient method of accesing the elements of HTML DOM via JavaScript?",
A: "querySelector method",
B: "setAttribute and addClass methods",
C: "querySelector method + variable assignment",
D: "Variable assignment approach",
Answer: "C"},
{Question:"What are the 5 basic concepts of programming?",
A: "Variables, Classes, Selectors, Attributes, Functions",
B: "Constants, Variables, Functions, Objects, Arrays",
C: "Syntax, Variables, Control, Data, Tools",
D: "Functions, Strings, Variables, Syntax, Objects",
Answer: "C"},
{Question:"What is wrong with the following syntax: window.getElementById('#button').addEventListener(click, function() {}; ?",
A: "Window is not the appropriate object to start with",
B: "Missing quotes around 'click' in 'addEventListener' method",
C: "Syntax of the 'addEventListener' method",
D: "All of the above",
Answer: "D"},
{Question:"Why is it important to assign variables at the beginning of the script?",
A: "Global scope and ease of access throughout the script",
B: "Because that's how it's done",
C: "Historical conventions within the coding community",
D: "It helps plan the flow of code",
Answer: "A"},
{Question:"What is the difference between a method and a function?",
A: "Method is preassigned, function is not",
B: "No substantial difference - they are equivalent",
C: "Methods are used only manipulate variables",
D: "Functions are used only with objects",
Answer: "B"}];

var answerOne = document.querySelector("#answer1");
var answerTwo = document.querySelector("#answer2");
var answerThree = document.querySelector("#answer3");
var answerFour = document.querySelector("#answer4");
var qText = document.querySelector("#qText");
var result = document.querySelector("#result");
var qNext = document.querySelector("#next");
var timer = document.querySelector("#timer");
var timerClock = document.querySelector("#timerClock");

// Initial environment
var timeLeft = 50;

function timerCount () {
  var quizTimer = setInterval(function() {
    timeLeft--;
    timerClock.textContent = timeLeft + " sec";

    if (timeLeft === 0) {
      clearInterval(quizTimer);
    }

  }, 1000);
}

function firstQuestion() {
  qText.innerHTML = questions[0].Question;
  
  timer.addEventListener("click", function() {
    answerOne.innerHTML = questions[0].A;
    answerTwo.innerHTML = questions[0].B;
    answerThree.innerHTML = questions[0].C;
    answerFour.innerHTML = questions[0].D;

    timerCount();

  });
  
}

document.addEventListener("load", firstQuestion());


