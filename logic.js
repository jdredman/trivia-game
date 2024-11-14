import questions from './questions.js';

let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    nextButton.disabled = true;
    resultContainer.innerHTML = ""; // Clear previous result
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    choicesContainer.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(button, index);
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(button, selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
        scoreContainer.textContent = score;
        resultContainer.innerHTML = `<p>Correct!</p>`;
    } else {
        button.style.backgroundColor = "red";
        resultContainer.innerHTML = `<p>Wrong!</p><p>The correct answer is: ${questions[currentQuestionIndex].choices[correctAnswer]}</p>`;
    }

    // Disable all buttons after an answer is selected
    Array.from(choicesContainer.children).forEach(btn => btn.disabled = true);

    nextButton.disabled = false;
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        // Optionally, you can reset the quiz or show the final score
    }
};

// Load the first question when the page loads
document.addEventListener("DOMContentLoaded", loadQuestion);