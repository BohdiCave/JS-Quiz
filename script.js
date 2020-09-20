// Assignment Code
var questions = ["What is the most efficient method of accesing the elements of HTML DOM via JavaScript?",
                 "What are the 5 basic concepts of programming?",
                 "What is wrong with the following syntax: window.getElementById('#button').addEventListener(click, function() {}; ?",
                 "Why is it important to assign variables at the beginning of the script?",
                 "What is the difference between a method and a function?"];
var answers1 = ["querySelector method", "Variables, Classes, Selectors, Attributes, Functions", 
                "Window is not the appropriate object to start with", "Global scope and ease of access throughout the script", 
                "Method is preassigned, function is not"];
var answers2 = ["setAttribute and addClass methods", "Constants, Variables, Functions, Objects, Arrays", 
                "Missing quotes around 'click' in 'addEventListener' method", "Because that's how it's done", 
                "No substantial difference - they are equivalent"];
var answers3 = ["querySelector method + variable assignment", "Syntax, Variables, Control, Data, Tools", 
                "Syntax of the 'addEventListener' method", "Historical conventions within the coding community", 
                "Methods are used only manipulate variables"];
var answers4 = ["Variable assignment approach", "Functions, Strings, Variables, Syntax, Objects", 
                "All of the above", "It helps plan the flow of code", "Functions are used only with objects"];
var correctAnswers = ["Answer 3", "Answer 3", "Answer 4", "Answer 1", "Answer 2"];


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
  qText.innerHTML = questions[0];

  timer.addEventListener("click", function() {
    answerOne.innerHTML = answers1[0];
    answerTwo.innerHTML = answers2[0];
    answerThree.innerHTML = answers3[0];
    answerFour.innerHTML = answers4[0];

    timerCount();

  });
  
}

document.addEventListener("load", firstQuestion());


