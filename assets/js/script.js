'use strict';
let postCount = 100;
let preCount =document.getElementById('quizasec')
let starter = document.getElementById('startQuiz')
let timeCount = document.getElementById('countdownTimer')
let startScreen = document.getElementById('startScreen')

let questionDisplay =document.querySelector('.questionAsk')
let answer1 = document.getElementById('ans1')
let answer2 = document.getElementById('ans2')
let answer3 = document.getElementById('ans3')
let answer4 = document.getElementById('ans4')

let timesUp = document.getElementById('timesupscreen')
let endForm = document.getElementById('endgame')
let initialBtn = document.getElementById('sendIniti')
let finalScore = document.getElementById('finalScore')
let assess = document.getElementById('assess')
let notify = document.getElementById('notify')
let timerInterval = null;

let questionsPossible = [
  {
    ord: 1,
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
    ord: 2,
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
    ord: 3,
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
    ord: 4,
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
    ord: 5,
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
    ord: 6,
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
    ord: 7,
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
    ord: 8,
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
function nextQuestion() {
  let answerButton = this.innerText
  answerCheck(answerButton)

  if(questionsIndex > questionsPossible.length - 1) {
    questionDisplay.classList.add('hide')
    result
  }
}


function countDown() {
  postCount--
  timeCount.textContent = `${postCount}`
  if (postCount < 0) {
    postCount = 0;
    timeCount.classList.add('hide')
    questionDisplay.classList.add('hide') 

    timesUp.classList.add('show')
    timesUp.classList.remove('hide')
  }
}


function answerCheck(answer) {
  let notifyText=''
  if (answer == questionsPossible[questionsIndex].answer) {
    notifyText ='Correct!'
    assess.classList.remove('hide')
    notify.textContent = notifyText
  } else {
      notifyText = 'Incorrect.'
      assess.classList.remove('hide')
      postCount = postCount - 10
      notify.textContent = notifyText
    return postCount
    }
  setTimeout(() => {
    assess.classList.add('hide')
  }, 1000);
}



let playerIniti = document.querySelector('#savescore')
function scoreKeep() {
  let playerIniti = document.querySelector('#savescore')
  localStorage.setItem("score", rightAnswers)
  localStorage.setItem("initials", playerIniti.value)
}

initialBtn.addEventListener("click",scoreKeep)

// debugger;
