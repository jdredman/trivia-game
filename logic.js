// Constants
const ELEMENT_IDS = {
    questionText: "question-text",
    choicesContainer: "choices-container",
    nextButton: "next-button",
    scoreContainer: "score",
    resultContainer: "result",
    questionContainer: "question-container",
    finalResultContainer: "final-result-container",
    progressBar: "progress-bar",
    heading: "heading",
    welcomeScreen: "welcome-screen",
    startButton: "start-button",
    gameContainer: "game-container",
    restartButton: "restart-button"
};

// Elements
const elements = {};
for (const [key, id] of Object.entries(ELEMENT_IDS)) {
    elements[key] = document.getElementById(id);
}

// Audio
const sounds = {
    correct: new Audio('sound/correct.mp3'),
    incorrect: new Audio('sound/incorrect.mp3'),
    background: new Audio('sound/background.mp3')
};
sounds.background.loop = true;

// Game state
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Event listeners
elements.startButton.addEventListener("click", startGame);
elements.nextButton.addEventListener("click", loadNextQuestion);
elements.restartButton.addEventListener("click", restartGame);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    elements.scoreContainer.textContent = score;
    selectedQuestions = shuffle(questions).slice(0, 10);
    elements.questionContainer.style.display = "block";
    elements.finalResultContainer.style.display = "none";
    elements.progressBar.value = 0;
    loadQuestion();
    elements.welcomeScreen.style.display = "none";
    elements.heading.style.display = "flex";
    elements.gameContainer.style.display = "block";
    sounds.background.play();
}

function loadQuestion() {
    elements.nextButton.disabled = true;
    elements.resultContainer.innerHTML = ""; // Clear previous result
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    elements.questionText.textContent = currentQuestion.question;

    elements.choicesContainer.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(button, index);
        elements.choicesContainer.appendChild(button);
    });

    // Update progress bar and text
    elements.progressBar.value = currentQuestionIndex + 1;
    // progressText.textContent = `${currentQuestionIndex + 1}/10`;
}

function selectAnswer(button, selectedIndex) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswer) {
        button.classList.add('button-correct');
        elements.resultContainer.classList.add('alert-correct');
        sounds.correct.play();
        score++;
        elements.scoreContainer.textContent = score;
        elements.resultContainer.innerHTML = `<h4>That's Right, Nice Job!</h4>`;
        triggerConfetti();
    } else {
        button.classList.add('button-incorrect');
        elements.resultContainer.classList.add('alert-incorrect');
        sounds.incorrect.play();
        elements.resultContainer.innerHTML = `<h4>Oops, that's wrong!</h4><p>The answer is: "${selectedQuestions[currentQuestionIndex].choices[correctAnswer]}"</p>`;
    }

    // Disable all buttons after an answer is selected
    Array.from(elements.choicesContainer.children).forEach(btn => btn.disabled = true);
    elements.nextButton.disabled = false;
    elements.nextButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function loadNextQuestion() {
    elements.resultContainer.classList.remove('alert-correct', 'alert-incorrect');

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
        elements.heading.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } else {
        endGame();
        elements.heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function endGame() {
    elements.questionContainer.style.display = "none";
    elements.finalResultContainer.style.display = "block";
    document.getElementById("final-score").textContent = score;
}

function restartGame() {
    startGame();
}

function triggerConfetti() {
    const duration = 1 * 500;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}