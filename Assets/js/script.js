var buttonStart = document.querySelector("#buttonStart");
var questionDiv = document.querySelector("#questions");
var answersDiv = document.querySelector("#listanswers");
var answerButtons = document.querySelectorAll("#answers");
var question1 = 0;
var timeLeft

//questions for the quiz
var questions = [
    {   question: "Which HTML element do we use to use JavaScript",
        answers: ["<scripting>", "<js>", "<header>", "<script>"],
        correctAnswer: "<script>" 
       
    },
    {   question: "Where in the page do we use the previous answer",
        answers:  ["The <body> section", "The first <h1> element", "Both the <head> and <body> section", "At the end of the CSS file"],
        correctAnswer: "Both the <head> and <body> section"
      
    },
    {
        question: "How do you comment in HTML and JavaScript",
        answers:["They are the same <-- Comment -->","//New Comment and <-- -->", "<--Comment --> and !/ Comment", "$Comment and >-- Comment --< "],
        correctAnswer: "//New Comment and <-- -->"
        },
    {
        question: "How do we write a function?",
        answers:["function = newFunction()", "function newFunction()", "function//newFunction", "function.newFunction"],
        correctAnswer: "function newFunction()"
    }
];
// start
function gameStart(){
displayQuestions()
timeLeft = 60
var timer = setInterval(function() {
        timeLeft--;
        if (timeLeft >= 0) {
          span = document.getElementById("timer");
          span.innerHTML = "Time: " + timeLeft;
        }
        if (timeLeft === 0) {
            alert('Sorry, out of time');
            clearInterval(timer);
        }
      }, 1000);
    };

function displayQuestions(){
    questionDiv.textContent = questions[question1].question
    answersDiv.innerHTML = ""
    for(let i = 0; i<=3; i++){
    var newLi = document.createElement("button")
        newLi.textContent = questions[question1].answers[i]
        answersDiv.appendChild(newLi)
    }
}

function clickAnswer(event){
    var element = event.target.textContent
    console.log("event target" , element)
    console.log("correct Answer",questions[question1].correctAnswer)
        if(element !== questions[question1].correctAnswer){
            timeLeft -= 15
        if(timeLeft < 0){
            timeLeft = 0
        }
        }
        question1++
    if(question1 == quizQuestions.length){
        gameEnd()
    }  
    displayQuestions()
    
}
buttonStart.addEventListener("click", gameStart)
answersDiv.onclick = clickAnswer

if (timeLeft <= 0){
gameEnd()   
}

function gameEnd(){
alert("Times Up!");
captureScore();
clearInterval(timer);
timeLeft = 0;
}

function captureScore(){
   var name = prompt("Enter your initials and the time remaining")
   let previousHS = localStorage.getItem("highScore"); 
   let currentScore = {
    name: name,
    score: timeLeft
   }; 
   console.log("timeLeft is equal to: " + name + timeLeft);
   if (!previousHS) {
    localStorage.setItem('highScore' , JSON.stringify(currentScore));console.log('record holder')
   console.log('High Score');
   } else if (previousHS.score < timeLeft) { 
    } else {console.log("do better next")};
}