let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score");
const resultContainer = document.getElementById("result");
const questionContainer = document.getElementById("question-container");
const finalResultContainer = document.getElementById("final-result-container");
const progressBar = document.getElementById("progress-bar");
const heading = document.getElementById("heading");
const welcomeScreen = document.getElementById("welcome-screen");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");
const restartButton = document.getElementById("restart-button");
const correctSound = new Audio('sound/correct.mp3');
const incorrectSound = new Audio('sound/incorrect.mp3');
const backgroundMusic = new Audio('sound/background.mp3');
backgroundMusic.loop = true;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", loadNextQuestion);
restartButton.addEventListener("click", restartGame);

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
    scoreContainer.textContent = score;
    selectedQuestions = shuffle(questions).slice(0, 10);
    questionContainer.style.display = "block";
    finalResultContainer.style.display = "none";
    progressBar.value = 0;
    loadQuestion();
    welcomeScreen.style.display = "none";
    heading.style.display = "flex";
    gameContainer.style.display = "block";
    backgroundMusic.play();
}

function loadQuestion() {
    nextButton.disabled = true;
    resultContainer.innerHTML = ""; // Clear previous result
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    choicesContainer.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(button, index);
        choicesContainer.appendChild(button);
    });

    // Update progress bar and text
    progressBar.value = currentQuestionIndex + 1;
    // progressText.textContent = `${currentQuestionIndex + 1}/10`;
}

function selectAnswer(button, selectedIndex) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswer) {
        button.classList.add('button-correct');
        resultContainer.classList.add('alert-correct');
        correctSound.play();
        score++;
        scoreContainer.textContent = score;
        resultContainer.innerHTML = `<h4>That's Right, Nice Job!</h4>`;
        triggerConfetti();
    } else {
        button.classList.add('button-incorrect');
        resultContainer.classList.add('alert-incorrect');
        incorrectSound.play();
        resultContainer.innerHTML = `<h4>Oops, that's wrong!</h4><p>The answer is: "${selectedQuestions[currentQuestionIndex].choices[correctAnswer]}"</p>`;
    }

    // Disable all buttons after an answer is selected
    Array.from(choicesContainer.children).forEach(btn => btn.disabled = true);
    nextButton.disabled = false;
    nextButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function loadNextQuestion() {
    resultContainer.classList.remove('alert-correct', 'alert-incorrect');

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
        heading.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } else {
        endGame();
        heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function endGame() {
    questionContainer.style.display = "none";
    finalResultContainer.style.display = "block";
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