// Assignment Code
var questions = [
{Question:"What is the most efficient method of accesing the elements of HTML DOM via JavaScript?",
A: "A: querySelector method",
B: "B: setAttribute and addClass methods",
C: "C: querySelector method + variable assignment",
D: "D: Variable assignment approach",
Answer: "C"},
{Question:"What are the 5 basic concepts of programming?",
A: "A: Variables, Classes, Selectors, Attributes, Functions",
B: "B: Constants, Variables, Functions, Objects, Arrays",
C: "C: Syntax, Variables, Control, Data, Tools",
D: "D: Functions, Strings, Variables, Syntax, Objects",
Answer: "C"},
{Question:"What is wrong with the following syntax: window.getElementById('#button').addEventListener(click, function() {}; ?",
A: "A: Window is not the appropriate object to start with",
B: "B: Missing quotes around 'click' in 'addEventListener' method",
C: "C: Syntax of the 'addEventListener' method",
D: "D: All of the above",
Answer: "D"},
{Question:"Why is it important to assign variables at the beginning of the script?",
A: "A: Global scope and ease of access throughout the script",
B: "B: Because that's how it's done",
C: "C: Historical conventions within the coding community",
D: "D: It helps plan the flow of code",
Answer: "A"},
{Question:"What is the difference between a method and a function?",
A: "A: Method is preassigned, function is not",
B: "B: No substantial difference - they are equivalent",
C: "C: Methods are used only manipulate variables",
D: "D: Functions are used only with objects",
Answer: "B"}];

var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
var quizTitle = document.querySelector("#quiz-title");
var qText = document.querySelector("#qText");
var result = document.querySelector("#result");
var timer = document.querySelector("#timer");
var aPrompt = document.querySelector("#answer-prompt");
var timerClock = document.querySelector("#timerClock");
var cardFooter = document.querySelector(".card-footer");
var cardBody = document.querySelector(".card-body");
var titleDiv;
var choice;
var correct = 0;
var place = 0;
console.log(place);
var timeLeft = 50;

// Function code
// Timer function, with quiz end if time is up
function timerCount () {
  var quizTimer = setInterval(function() {
    timeLeft--;
    timerClock.textContent = timeLeft + " sec";

    if (timeLeft === 0) {
      clearInterval(quizTimer);
      endQuiz();
      titleDiv.textContent = "Time is up! Sorry, you did not pass. \r\n Please try again later."
    } else if (place > 4) {
      clearInterval(quizTimer);
    }
  }, 1000);
}

// Updating HTML upon loading
function newDiv() {
  titleDiv = document.createElement("div");
  titleDiv.classList.add("newDiv");
  titleDiv.textContent = "JavaScript Quiz"; 
  cardBody.append(titleDiv);
}

// Function rendering each question and answer choices
function askQuestion(place) {
  qText.innerHTML = questions[place].Question;
  A.innerHTML = questions[place].A;
  B.innerHTML = questions[place].B;
  C.innerHTML = questions[place].C;
  D.innerHTML = questions[place].D;
  cardFooter.textContent = "Question " + (place + 1) + "/5";
}

// First function to run upon loading
function firstQuestion() {
  // Listening to the click initiating the quiz and timer
  timer.addEventListener("click", function() {
    timerCount();
    quizTitle.innerHTML = "JavaScript Quiz";
    aPrompt.classList.remove("hide");
    timer.classList.add("hide");
    titleDiv.classList.add("hide");
    askQuestion(place);
  });
}

// Checking the answers and advancing the quiz
function checkAnswer() {
  var correctChoice = document.getElementById(questions[place].Answer);
  console.log(correctChoice.id);
  // Checking for the correct answer and subtracting time if not
  if (choice === correctChoice.id) {
    correct++;
    console.log("Correct answers: " + correct);
    result.textContent = "Correct! Well done.";
  } else {
    timeLeft -= 10;
    timerClock.textContent = timeLeft + " sec";
    result.textContent = "Wrong. The correct answer is " + questions[place].Answer;
  } 
  // Advancing the position or ending the quiz
  place++;
  console.log(place); 
  if (place > 4 && correct <=2) {
    endQuiz();
    titleDiv.textContent = "Sorry, you did not answer enough questions correctly. Please try again later."   
  } else if (place > 4 && correct >= 3) {
    endQuiz();
    titleDiv.textContent = "Congratulations! You passed this quiz. \r\n Correct answers: " + correct + "\r\n Final score: " + ((timeLeft - 1) + (correct * 10)); 
  } else if (timeLeft < 0) {
    endQuiz();
    titleDiv.textContent = "Time is up! Sorry, you did not pass. \r\n Please try again later."
  } else {
    askQuestion(place);
  }
}

// Changes in the document display as the quiz ends
function endQuiz() {
  qText.innerHTML = "";
  cardFooter.textContent = "";
  aPrompt.classList.add("hide");
  result.classList.add("hide");
  titleDiv.setAttribute("style", "font-size: 28px;");
  titleDiv.classList.remove("hide");
}

// Execution
//Event listeners for each answer choice button
 A.addEventListener("click", function() {
  choice = this.id;
  console.log(choice);
  checkAnswer();
});
B.addEventListener("click", function() {
  choice = this.id;
  console.log(choice);
  checkAnswer();
});
C.addEventListener("click", function() {
  choice = this.id;
  console.log(choice);
  checkAnswer();
});
D.addEventListener("click", function() {
  choice = this.id;
  console.log(choice);
  checkAnswer();
});
// Event listeners for page loading
document.addEventListener("load", newDiv());
document.addEventListener("load", firstQuestion()); 