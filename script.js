// Assignment Code
// Questions, answer choices, and correct answers as an array of objects
var questions = [
{Question:"The most efficient method of accesing the DOM via JavaScript is the...",
A: "A: querySelector method",
B: "B: setAttribute and addClass methods",
C: "C: querySelector method and assignment of variables",
D: "D: variable assignment approach",
Answer: "C"},
{Question:"What are the 5 basic concepts of programming?",
A: "A: Attributes, variables, classes, selectors, functions",
B: "B: Constants, variables, arrays, objects, functions",
C: "C: Syntax, variables, control structure, data structure, tools",
D: "D: Syntax, variables, strings, objects, functions",
Answer: "C"},
{Question:"Identify problem(s): \r\n" + "html.getElementById('#button').addEventListener(click, function() {}; ".italics(),
A: "A: 'html' is not an appropriate object to start with",
B: "B: Missing quotes around 'click' event",
C: "C: Syntax of the event listener method",
D: "D: All of the above",
Answer: "D"},
{Question:"Why do we assign variables at the top?",
A: "A: To set the scope and for ease of access",
B: "B: Because that's how it's done",
C: "C: Historical conventions among the coders",
D: "D: It helps plan the flow of code",
Answer: "A"},
{Question:"What is the difference between a method and a function?",
A: "A: Method is preassigned, function is not",
B: "B: No substantial difference - they are equivalent",
C: "C: Methods are used only manipulate variables",
D: "D: Functions are used only with objects",
Answer: "B"}];
// Getting document elements
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
//Declaring additional variables to be used 
var titleDiv, choice, finalScore, highScore;
var correct = 0;
var place = 0;
console.log(place);
var timeLeft = 100;

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
  // Fail: fewer than 3 correct answers
  if (place > 4 && correct <=2) {
    endQuiz();
    titleDiv.textContent = "Sorry, you did not answer enough questions correctly. Please try again later."   
  // Pass: 3 or more correct answers
  } else if (place > 4 && correct >= 3) {
    endQuiz();
    var finalScore = ((timeLeft - 1) + (correct * 10));
    titleDiv.textContent = "Congratulations! You passed this quiz. \r\n Correct answers: " + correct + "\r\n Final score: " + finalScore; 
    cardFooter.innerHTML = "<button id='add-score' class='btn'>Save your score</button>";
    // Event listener for clicking the "save scores" button
    document.getElementById("add-score").addEventListener("click", function() {
      this.setAttribute("disabled", true);
      var initials = prompt("Enter your initials");
      // Saving the user-score pair as an object  
      highScore = {User: initials, Score: finalScore};
      // adding it to a sorted array of top 5 scores (retrieved from local memory)
      var highScores = localStorage.getItem("High Scores") || "[]";
      console.log(highScores);
      highScores = [...JSON.parse(highScores), highScore];
      //sorting the array in descending order and cutting after five terms
      highScores.sort(function (a,b) {
        return parseFloat(b.Score) - parseFloat(a.Score);
      });     
      highScores = highScores.slice(0,5);
      console.log(highScores);
      // saving the updated array into local memory
      localStorage.setItem("High Scores", JSON.stringify(highScores));
    });
  // Fail: time is up 
  } else if (timeLeft < 0) {
    endQuiz();
    titleDiv.textContent = "Time is up! Sorry, you did not pass. \r\n Please try again later."
  // Quiz still in progress
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
