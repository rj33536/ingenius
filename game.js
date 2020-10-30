const question = document.getElementById("question");
const question_context = document.getElementById("question-context");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
const result = document.getElementById("result");
const resultContinue = document.getElementById("continue");
const question_container = document.getElementById("question-container");
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


let questions = [
  {
    "id": "1",
    "question_context": "A little exercise goes a long way, both for keeping you healthy and relieving stress. You need to start a regular fitness regimen.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Put it off",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": null
      },
      {
        "option_text": "Join a gym",
        "option_credit": "0",
        "option_debit": "500",
        "option_liability": "0",
        "option_result": null
      }
    ]
  },
  {
    "id": "2",
    "question_context": "You’ve been working for several hours, and you’re starving. But you forgot your lunch.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "BUY A SALAD",
        "option_credit": "0",
        "option_debit": "20",
        "option_liability": "0",
        "option_result": {
          "result_text": "It may be bad for you, but it sure is cheap. Perhaps that’s why low-income workers like you are more likely to be overweight.",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      },
      {
        "option_text": "BUY A BURGER",
        "option_credit": "0",
        "option_debit": "10",
        "option_liability": "0",
        "option_result": {
          "result_text": "It may be bad for you, but it sure is cheap. Perhaps that’s why low-income workers like you are more likely to be overweight.",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "3",
    "question_context": "You’re walking down the street when you see someone drop a $10 bill.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "GIVE IT TO THEM",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": null
      },
      {
        "option_text": "POCKET THE Rs.50",
        "option_credit": "50",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": null
      }
    ]
  },
  {
    "id": "4",
    "question_context": "You come out of your house to discover that someone has siphoned the gas from your car. And you’re already running late for work.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "4",
    "question_context": "Your son saw an icecream truck and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "5",
    "question_context": "Your son saw an icecream truck and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "6",
    "question_context": "Your son saw an icecream truck and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "7",
    "question_context": "Your son saw an icecream truck and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  },
  {
    "id": "8",
    "question_context": "Your son saw an icecream truck and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that $10 will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  }

];

// let questions = [
//   {
//     question: "Pay rent",
//     choice1: "Rs 8000",
//     choice2: "pay half and say u will pay half later",
//     choice3: "pack stuff and leave home",

//     answer: 1
//   },
//   {
//     question: "Buy Groceries",
//     choice1: "1500",
//     choice2: "700",
//     choice3: "340",

//     answer: 3
//   },
//   {
//     question: "pay EMI of Bike",
//     choice1: "IGNORE",
//     choice2: "pay Rs 3050",
//     choice3: "get help from friends",

//     answer: 4
//   }
// ];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 30;

startGame = () => {
  questionCounter = 0;
  score = 20000;
  availableQuesions = questions;
  getNewQuestion();
};

resultContinue.onclick = ()=>{
  result.style.display = "none";
  question_container.style.display = "block";
}

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("./end.html");
  }
  questionCounter++;
  progressText.innerText = `DAY ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = questionCounter - 1;
  //Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];

  question.innerText = currentQuestion.question_text;
  question_context.innerText = currentQuestion.question_context;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    let current_option  =currentQuestion.options[number - 1];
    if (currentQuestion.options[number - 1]) {
      choice.innerText = current_option.option_text + (current_option.option_debit!="0"?`(Rs. ${current_option.option_debit})`:"");
      choice.parentElement.style.display = "flex";
    } else {
      choice.parentElement.style.display = "none";
    }

  });


  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const option_details = currentQuestion.options[selectedAnswer - 1];
    incrementScore(option_details.option_credit);
    incrementScore(-option_details.option_debit);
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      if(option_details.option_result){
        result.style.display = "block";
       question_container.style.display = "none";
       result.querySelector("h3").innerText = option_details.option_result.result_text;
      }
      getNewQuestion();
      
    }, 1000);
  });
});

incrementScore = num => {
  score += parseInt(num);
  scoreText.innerText ='Rs '+ score;
};

startGame();