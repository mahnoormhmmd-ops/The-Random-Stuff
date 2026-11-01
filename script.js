// DOMAIN Elelemts

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("maximum-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");
const intro = document.getElementById("intro");
const nextButton = document.getElementById("next-btn");
const food = document.getElementById("food")
const pickScreen = document.getElementById("pick-screen")
const noodlesCard = document.getElementById("noodles-card");
const browniesCard = document.getElementById("brownies-card");
const noodlesScreen = document.getElementById("noodles-screen");
const browniesScreen = document.getElementById("brownies-screen");
const backToPickButtons = document.querySelectorAll(".back-to-pick")
const pickButton = document.getElementById("pick-btn");
const backButton = document.getElementById("back-btn");
const clickButton = document.getElementById("click-btn");
const clickScreen = document.getElementById("click-screen");
const clickBackButton = document.getElementById("click-back-btn");
const applicationForm = document.getElementById("application-form");
const applicationResult = document.getElementById("application-result");
const appResultTitle = document.getElementById("app-result-title");
const appResultText = document.getElementById("app-result-text");
const themeButton = document.getElementById("theme-btn");

//Quiz QUESTIOMS

const allQuestions = [
    {
        question: "What is the only continent without an active volcano?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "Australia", correct: true},
            {text: "Antarctica", correct: false},
    ]},
    {
        question: "Which invention is credited to Alexander Graham Bell?",
        answers: [
            {text: "Lightbulb", correct: false},
            {text: "Telephone", correct: true},
            {text: "Radio", correct: false},
            {text: "Television", correct: false}
        ]
    },
    {
        question: "Which human organ can regenerate itself after being damages?",
        answers: [
            {text: "Heart", correct: false},
            {text: "Liver", correct: true},
            {text: "Kidney", correct: false},
            {text: "Lungs", correct: false}
        ]
    },
    {
        question: "Which planet has the most moons in our solar system (currently known)?",
        answers: [
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: true},
            {text: "Uranus", correct: false},
            {text: "Neptune", correct: false}
        ]
    },
    {
        question: "What is the smallest country in the world by area?",
        answers: [
            {text: "Monaco", correct: false},
            {text: "San Marino", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Luxembourg", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Mercury", correct: false},
            {text: "Jupiter", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Artic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "How many bones are in the adult human body?",
        answers: [
            {text: "186", correct: false},
            {text: "206", correct: true},
            {text: "226", correct: false},
            {text: "246", correct: false}
        ]
    },
    {
        question: "Which gas do plants take in from the air for photosynthesis?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: false},
            {text: "Carbon dioxide", correct: true},
            {text: "Hydrogen", correct: false}
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Iron", correct: false},
            {text: "Quartz", correct: false},
            {text: "Diamond", correct: true}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Pablo Picasso", correct: false},
            {text: "Michelangelo", correct: false}
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Sydeny", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false}
        ]
    },
    {
        question: "Which element has the chemical symbol Fe?",
        answers: [
            {text: "Iron", correct: true},
            {text: "Fluorine", correct: false},
            {text: "Lead", correct: false},
            {text: "Tin", correct: false}
        ]
    }
];


// QUIZ STATE VARS
const QUESTIONS_PER_ROUND = 5;
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = QUESTIONS_PER_ROUND;
maxScoreSpan.textContent = QUESTIONS_PER_ROUND;


//ANSWER SHUFFLER
function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

//EVENT LISTENERS

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
nextButton.addEventListener("click", goTofood);
noodlesCard.addEventListener("click", goToNoodles);
browniesCard.addEventListener("click", goToBrownies);
backToPickButtons.forEach(button => button.addEventListener("click", backToPick))
pickButton.addEventListener("click", goToPick);
backButton.addEventListener("click", backToFood);
clickButton.addEventListener("click", goToClick);
clickBackButton.addEventListener("click", backFromClick);
applicationForm.addEventListener("submit", submitApplication);
themeButton.addEventListener("click", toggleTheme);


function startQuiz() {

    clickScreen.classList.remove("active");
    pickScreen.classList.remove("active");
    noodlesScreen.classList.remove("active");
    browniesScreen.classList.remove("active");
    food.classList.remove("active");
    // reset vars
    currentQuestionIndex = 0;

   score = 0;
    scoreSpan.textContent = score;

    quizQuestions = shuffle(allQuestions).slice(0, QUESTIONS_PER_ROUND);

    intro.classList.add("hidden");

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}
function showQuestion() {
    //reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width= progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    shuffle(currentQuestion.answers).forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)
        answerContainer.appendChild(button)
    })
}

function selectAnswer(event) {
    //optimization check
    if(answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"
Array.from(answerContainer.children).forEach(button => {
    if(button.dataset.correct === "true") {
        button.classList.add("correct");

    } else if(button === selectedButton) {
        button.classList.add("incorrect");
    }
});
if(isCorrect) {
    score++;
    scoreSpan.textContent = score
}
setTimeout(() => {
    currentQuestionIndex++;

    //check if there are more questions or if the quiz is over
    if(currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}, 1000);
}
function showResults() {

    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;
    if (percentage == 100) {
        resultMessage.textContent = "Perfecto! You are such a genius >:D";

    } else if (percentage >=80) {
        resultMessage.textContent = "Great job! Looks like you ARE intelligent indeed! ;)";

    } else if (percentage >=60) {
        resultMessage.textContent = "Not too bad. You you need improvement duh!";

    } else if (percentage >=40) {
        resultMessage.textContent = "Okay, looks like you are Not so intelligent. Don't worry, there's always the option to get better!";

    } else {
        resultMessage.textContent = "Damn dude, you are SOO cooked... Good Luck :D"
    }
}
function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}

function goTofood() {
    resultScreen.classList.remove("active");
    food.classList.add("active");
}

function goToPick() {
    food.classList.remove("active");
    pickScreen.classList.add("active");
}

function goToNoodles() {
    pickScreen.classList.remove("active");
    noodlesScreen.classList.add("active");
}

function goToBrownies() {
    pickScreen.classList.remove("active");
    browniesScreen.classList.add("active");
}

function backToPick() {
    noodlesScreen.classList.remove("active");
    browniesScreen.classList.remove("active");
    pickScreen.classList.add("active");

}

function backToFood() {
    pickScreen.classList.remove("active");
    food.classList.add("active")
}

function goToClick() {
    food.classList.remove("active");
    clickScreen.classList.add("active");
}


function backFromClick() {
    clickScreen.classList.remove("active");
    food.classList.add("active");

    applicationForm.reset();
    applicationForm.classList.remove('hidden');
    applicationResult.classList.add('hidden');
}

function submitApplication(event) {
    event.preventDefault(); //stops from reloading


    const name= document.getElementById("app-name").value;
    const job = document.getElementById("app-job").value;

    appResultTitle.textContent = "Welcome to the family, "+ name+ ".";
    appResultText.textContent =
        "Your application for "+job + " has been accepted. "+
        "We have already prepared your room. It has been expecting you. Its room number 13.";

    applicationForm.classList.add('hidden');
    applicationResult.classList.remove("hidden");

}


function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    themeButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}