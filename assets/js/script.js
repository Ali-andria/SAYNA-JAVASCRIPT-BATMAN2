const quizData = [
  {
    "question": "Quel est l’autre nom de l’Homme-Mystère ?",
    "response": [
      {
        "text": "Le Saphinx",
        "isGood": true
      },
      {
        "text": "Le Saphir",
        "isGood": true
      },
      {
        "text": "Le Joker",
        "isGood": true
      }
    ]
  },
  {
    "question": "Quelle est l’ancienne profession de Harley Quinn ?",
    "response": [
      {
        "text": "Infimière",
        "isGood": false
      },
      {
        "text": "Psychiatre",
        "isGood": true
      },
      {
        "text": "Dentiste",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quel est l’objet fétiche de Double Face ?",
    "response": [
      {
        "text": "Une pièce",
        "isGood": true
      },
      {
        "text": "Un livre",
        "isGood": false
      },
      {
        "text": "Un couteau",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quelle ville Batman défend-il ?",
    "response": [
      {
        "text": "Gotham City",
        "isGood": true
      },
      {
        "text": "Starling City",
        "isGood": false
      },
      {
        "text": "Tananarive",
        "isGood": false
      }
    ]
  },
  {
    "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    "response": [
      {
        "text": "Georges Clooney",
        "isGood": false
      },
      {
        "text": "Val Kilmer",
        "isGood": false
      },
      {
        "text": "Mickael Keaton",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
    "response": [
      {
        "text": "Matina et Adam",
        "isGood": false
      },
      {
        "text": "Elaine et Georges",
        "isGood": true
      },
      {
        "text": "Martha et James",
        "isGood": false
      }
    ]
  },
  {
    "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
    "response": [
      {
        "text": "Le Pingouin",
        "isGood": false
      },
      {
        "text": "L'Homme mystère",
        "isGood": true
      },
      {
        "text": "Le Geek",
        "isGood": false
      }
    ]
  },
  {
    "question": " Qui interprète le Joker en 2008 ?",
    "response": [
      {
        "text": "Heath Legder",
        "isGood": false
      },
      {
        "text": "Haeth Ledger",
        "isGood": false
      },
      {
        "text": "Heath Ledger",
        "isGood": true
      }
    ]
  },
  {
    "question": "En quelle année Robin fait il sa première apparition ?",
    "response": [
      {
        "text": "1940",
        "isGood": true
      },
      {
        "text": "1936",
        "isGood": false
      },
      {
        "text": "1941",
        "isGood": false
      }
    ]
  },
  {
    "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    "response": [
      {
        "text": "Oracle Huntress",
        "isGood": true
      },
      {
        "text": "Black Canary",
        "isGood": false
      },
      {
        "text": "L'Epouvantail",
        "isGood": false
      }
    ]
  },
  {
    "question": "Batman c’est aussi le nom d’une ville en...",
    "response": [
      {
        "text": "Islande",
        "isGood": false
      },
      {
        "text": "Turquie",
        "isGood": true
      },
      {
        "text": "Allemagne",
        "isGood": false
      }
    ]
  },
  {
    "question": "Qui a realisé Batman en 1966 ?",
    "response": [
      {
        "text": "Stanley Kubrick",
        "isGood": false
      },
      {
        "text": "Andy Warhol",
        "isGood": false
      },
      {
        "text": "Leslie Martinson",
        "isGood": true
      }
    ]
  }
]

const questionQuiz = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const nextQuestion = document.getElementById("nextQuestion");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextQuestion.innerHTML = "QUESTION SUIVANTE";
  displayQuestion ();
}

function displayQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  questionQuiz.innerHTML = currentQuestion.question;

  currentQuestion.response.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add('btn');
    answerList.appendChild(button);
    if(answer.isGood) {
      button.dataset.isGood = answer.isGood;
    }
    button.addEventListener("click", selectResponse)
  });
}

function selectResponse(e) {
  const selectedBtn = e.target;
  const isCorrest = selectedBtn.dataset.isGood === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct")
    score++;
  } else {
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerList.children).forEach(button => {
    if(button.dataset.isGood === "true") {
      button.classList.add("correct");
    }
    button.disable = true;
  });
  nextQuestion.style.display= "block";
}

function resetState() {
  nextQuestion.style.display ="none";
  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }
}

function showScore() {
  resetState();
  questionQuiz.innerHTML = 'You scored ${score} / ${quizData.length}';
  nextQuestion.innerHTML = "RECOMMENCER LE QUIZ";
  nextQuestion.style.display ="block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

nextQuestion.addEventListener("click", () => {
  if(currentQuestionIndex < quizData.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
})
startQuiz();