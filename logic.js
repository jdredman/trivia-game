// Array of quiz questions based on Total Money Makeover
const questions = [
    {
        question: "According to Dave Ramsey, what's the first baby step?",
        choices: [
            "Save $1,000 for your starter emergency fund",
            "Pay off all your debt",
            "Invest in mutual funds",
            "Save for retirement"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these is not one of Ramsey's recommended debt snowball techniques?",
        choices: [
            "List debts smallest to largest",
            "Pay off the largest debt first",
            "Gain momentum by paying off smallest first",
            "Build up payments as you go"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a sinking fund according to Dave Ramsey?",
        choices: [
            "A fund for investments",
            "A fund set aside for anticipated expenses",
            "A retirement account",
            "A rainy-day fund"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score");

function loadQuestion() {
    nextButton.disabled = true;
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    choicesContainer.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswer) {
        alert("Correct!");
        score++;
        scoreContainer.textContent = score;
    } else {
        alert("Wrong answer!");
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionText.textContent = "Quiz Over!";
    choicesContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
}

loadQuestion(); // Initialize the quiz