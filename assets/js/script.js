
let questions = [
  {
    numb: 1,
    question: "Common data-types include all EXCEPT?",
    answer: "classes",
    options: [
      "boolian",
      "numbers",
      "strings",
      "classes"
    ]
  },
  {
    numb: 2,
    question: "What does the markup language (html) do on this website?",
    answer: "Host text-based content and provide formatting and integration for other forms of media to present content directly to the client.",
    options: [
      "Host text-based content and provide formatting and integration for other forms of media to present content directly to the client.",
      "Allows designers to add additional functionality to the front end of a website such as drop down menus and realtime statistics from third parties.",
      "Adds styling to the pages elements to provide aesthetic benefits, branding, or simplify certain formating choices",
      "provide corrections directly to a recently updated copy of the public-facing live code to test new ideas 'in the field'."
    ]
  },
  {
    numb: 3,
    question: "What does the stylesheet language (css) do on this website?",
    answer: "Adds styling to the pages elements to provide aesthetic benefits, branding, or simplify certain formating choices.",
    options: [
      "Host text-based content and provide formatting and integration for other forms of media to present content directly to the client.",
      "Allows designers to add additional functionality to the front end of a website such as drop down menus and realtime statistics from third parties.",
      "Adds styling to the pages elements to provide aesthetic benefits, branding, or simplify certain formating choices.",
      "provide corrections directly to a recently updated copy of the public-facing live code to test new ideas 'in the field'."
    ]
  },
  {
    numb: 4,
    question: "What does the scripting language (javascript[js]) do on this website?",
    answer: "Allows designers to add additional functionality to the front end of a website such as drop down menus and realtime statistics from third parties.",
    options: [
      "Host text-based content and provide formatting and integration for other forms of media to present content directly to the client.",
      "Allows designers to add additional functionality to the front end of a website such as drop down menus and realtime statistics from third parties.",
      "Adds styling to the pages elements to provide aesthetic benefits, branding, or simplify certain formating choices",
      "provide corrections directly to a recently updated copy of the public-facing live code to test new ideas 'in the field'."
    ]
  },
  {
    numb: 5,
    question: "How do you connect a live empty-gitHub repository in a local folder?",
    answer: "Go to directory of the local folder in the console (GitBash)>enter 'git init'>enter 'git remote add origin [git@github.url{yourname}]'",
    options: [
      "Go to directory of the local folder in the console (GitBash)>enter 'git init'>enter 'git remote add origin [git@github.url{yourname}]'",
      "Go to directory of the local folder in the console (GitBash)>enter 'git remote add origin [git@github.url{yourname}]'>enter 'git init'",
      "Go to directory of the local folder in the console (GitBash)>enter 'mkdir .git'>enter 'git remote add origin [git@github.url{yourname}]'",
      "Go to directory of the local folder in the console (GitBash)>enter 'touch .git'>enter 'git remote add origin [git@github.url{yourname}]'",
    ]
  },
  {
    numb: 6,
    question: "Which font is Apple machine browsing exclusive (as a design rule not a 100% always true fact)?",
    answer: "Helvettica",
    options: [
        "Helvettica",
        "Ariel",
        "macAttack",
        "Swift-Type",
    ]
  },
  {
    numb: 7,
    question: "Now that I think about it; which font should be an Apple machine browsing exclusive (as a design rule not a 100% always true fact)?",
    answer: "macAttack",
    options: [
        "Helvettica",
        "Ariel",
        "macAttack",
        "Swift-Type",
    ]
  },
  {
    numb: 8,
    question: "Who is indisputably the most important person in Vault 101: He who shelters us from the harshness of the atomic wasteland, and to whom we owe everything we have, including our lives?",
    answer: "The Overseer",
    options: [
        "The Overseer",
        "The Overseer",
        "Me, Nick...",
        "The Overseer",
    ]
  },
];

let questionOrder =  questions [Math.floor(Math.random()*questions.length)];
console.log(questionOrder);


//Quiz Countdown Timer
var sec = 120;
function quizTimer(){
    QTSupreme = setInterval(countdownTimer, 100);
    function countdownTimer () {
        document.getElementById('countdownTimer').innerHTML = sec +" seconds remaining"
        sec--;
        if (sec<= 0){
            clearInterval(QTSupreme);
            timeUpScreen();
        }
    }
}

//Question Display
var askQuestionsShow = document.querySelector("#questionask")
function questionDisplay() {
    var askQuestion = document.createElement("p");
    askQuestion.className="question-card";
    askQuestion.textContent=questions.question;
};


function beginQuiz(){
    document.getElementById("quizanoun").style.display="none";
    quizTimer();
    questionDisplay();
}


//precountdown to quiz
var timeCount = 5;
function preTimer(time){
    preCount = setInterval(timer, 900);
    function timer(){
        if (timeCount <=0){
            clearInterval(preCount);
            beginQuiz();
        } else {
            document.getElementById("quizasec").innerHTML = timeCount;
        }
        timeCount -=1;
    }
}
//Quiz Button Transitioner
document.getElementById("startQuiz").addEventListener("click", function(){
    document.getElementById("startscreen").style.display ="none";
    document.getElementById("questionsscreen").style.display = "inline";
    preTimer();
});

