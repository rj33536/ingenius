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
    "question_context": " You are growing elder and expect to face medical problems soon ,You can buy a medical insurance",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Put it off",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "You should be Serious about your health,Medical bills can cause serious debts in ones lifes",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      },
      {
        "option_text": "Pay for medical insurance by looking at policybazar.com ",
        "option_credit": "0",
        "option_debit": "550",
        "option_liability": "0",
        "option_result": null
      },
      {
        "option_text": "Go to a Medical insurance Agent ",
        "option_credit": "0",
        "option_debit": "1100",
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
        "option_debit": "200",
        "option_liability": "0",
        "option_result": {
          "result_text": " Healthy eating habits costs more .Try to take lunch with you always to save some money.",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      },
      {
        "option_text": "BUY A BURGER",
        "option_credit": "0",
        "option_debit": "100",
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
    "question_context": "You’re Maid wants to increase her pay or else she will not work anymore",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Increase the salary",
        "option_credit": "0",
        "option_debit": "1000",
        "option_liability": "0",
        "option_result": null
      },
      {
        "option_text": "Search for new Maid",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": null
      }
    ]
  },



  {
    "id": "4",
    "question_context": "You Got a email from BSES about electricity bill of this month. If not paid You will be out of electricity soon ",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Ignore",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": " Paying for Water, Gas,Electricity bills takes major chunks of salaries but you are not allowed to ignore these . ",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      },
      {
        "option_text": "Pay Bill",
        "option_credit": "0",
        "option_debit": "1240",
        "option_liability": "0",
        "option_result": {
          "result_text": " Paying for Water, Gas,Electricity bills takes major chunks of salaries but you are not allowed to ignore these . ",
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
    "question_context": "Your son saw a Cool toy and ran for it.",
    "question_text": "WHAT DO YOU WANT TO DO?",
    "options": [
      {
        "option_text": "Say no",
        "option_credit": "0",
        "option_debit": "0",
        "option_liability": "0",
        "option_result": {
          "result_text": "More that 76% people can't fulfill their kid's wishes just because of money. But that 660 Rs will make a difference",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      },
      {
        "option_text": "Buy Toy",
        "option_credit": "0",
        "option_debit": "660",
        "option_liability": "0",
        "option_result": {
          "result_text": "You could buy somthing useful for him and teach him not to waste money on stupid stuff from early age",
          "result_credit": "0",
          "result_debit": "0",
          "result_liability": "0"
        }
      }
    ]
  }

];

const CORRECT_BONUS = 0;
const MAX_QUESTIONS = 30;

startGame = () => {
  questionCounter = 0;
  score = 5000;
  availableQuesions = questions;
  getNewQuestion();
};

resultContinue.onclick = ()=>{
  result.style.display = "none";
  question_container.style.display = "block";
  getNewQuestion();
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
  speak(currentQuestion.question_context);
  speak(currentQuestion.question_text);
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

    if (classToApply === "incorrect") {
      incrementScore(CORRECT_BONUS);
      console.log("correct");
     // jump();
    }
    console.log(classToApply);
    selectedChoice.parentElement.classList.add(classToApply);
    
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      if(option_details.option_result){
        result.style.display = "block";
       question_container.style.display = "none";
       result.querySelector("h3").innerText = option_details.option_result.result_text;
       speak(option_details.option_result.result_text)
      }else{
        getNewQuestion();
      }
      
      
    }, 1000);
  });
});

incrementScore = num => {
  score += parseInt(num);
  scoreText.innerText ='Rs '+ score;
};

speak=(message)=>{
  var msg = new SpeechSynthesisUtterance(message);
window.speechSynthesis.speak(msg);
}


startGame();