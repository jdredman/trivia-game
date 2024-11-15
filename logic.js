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
  restartButton: "restart-button",
};

// Elements
const elements = {};
for (const [key, id] of Object.entries(ELEMENT_IDS)) {
  elements[key] = document.getElementById(id);
}

// Audio
const sounds = {
  correct: new Audio("sound/correct.mp3"),
  incorrect: new Audio("sound/incorrect.mp3"),
  background: new Audio("sound/background.mp3"),
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
  trackEvent("GameStarted");
  currentQuestionIndex = 0;
  score = 0;
  elements.scoreContainer.textContent = score;
  selectedQuestions = shuffle(questions).slice(0, 7);
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
}

function selectAnswer(button, selectedIndex) {
  const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;

  if (selectedIndex === correctAnswer) {
    button.classList.add("button-correct");
    elements.resultContainer.classList.add("alert-correct");
    sounds.correct.play();
    score++;
    elements.scoreContainer.textContent = score;
    elements.resultContainer.innerHTML = `<h4>That's Right, Nice Job!</h4>`;
    triggerConfetti();
  } else {
    button.classList.add("button-incorrect");
    elements.resultContainer.classList.add("alert-incorrect");
    sounds.incorrect.play();
    elements.resultContainer.innerHTML = `<h4>Oops, that's wrong!</h4><p>The answer is: "${selectedQuestions[currentQuestionIndex].choices[correctAnswer]}"</p>`;
  }

  // Update progress bar after answering - Fixed to use elements.progressBar
  elements.progressBar.value = currentQuestionIndex + 1;

  // Disable all buttons after an answer is selected
  Array.from(elements.choicesContainer.children).forEach(
    (btn) => (btn.disabled = true)
  );
  elements.nextButton.disabled = false;
  elements.nextButton.scrollIntoView({ behavior: "smooth", block: "center" });
}

function loadNextQuestion() {
  elements.resultContainer.classList.remove("alert-correct", "alert-incorrect");

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    loadQuestion();
    elements.heading.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    endGame();
    elements.heading.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function endGame() {
  trackEvent("GameEnded", score);
  elements.questionContainer.style.display = "none";
  elements.finalResultContainer.style.display = "block";
  document.getElementById("final-score").textContent = score;
}

function restartGame() {
  trackEvent("GameRestarted");
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
      origin: { x: 0 },
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function generateUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

// Constants for tracking
const AIRTABLE_API_KEY =
  "patoE4pi17nfMjjIG.38e64ce260f2e65d38c4bafc5c50b5ab195b68edfa1b483935cef1dcbfa64ffe";
const AIRTABLE_BASE_ID = "app4wgVhMc2LaOl17";
const AIRTABLE_TABLE_NAME = "TriviaGame";

// Tracking function
async function trackEvent(eventName, score = 0) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                SessionID: generateUUID(),
                Event: eventName,
                Score: score,
              },
            },
          ],
        }),
      }
    );
    if (!response.ok) console.error("Error tracking:", response.statusText);
  } catch (err) {
    console.error("Tracking failed:", err);
  }
}
