const questions = [
  {
    question: "What is 8 + 5?",
    answer: "13"
  },
  {
    question: "What is 12 - 4?",
    answer: "8"
  },
  {
    question: "What is 6 × 7?",
    answer: "42"
  },
  {
    question: "What is half of 30?",
    answer: "15"
  },
  {
    question: "Solve: x + 9 = 20. What is x?",
    answer: "11"
  },
  {
    question: "What is 25% of 200?",
    answer: "50"
  },
  {
    question: "What is the mean of 4, 6, and 8?",
    answer: "6"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quizBox").style.display = "block";
  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("score").innerText = "Score: " + score;
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").innerText = "Correct! Great job.";
  } else {
    document.getElementById("feedback").innerText = "Not quite. Correct answer: " + correctAnswer;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 1200);
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("answer").style.display = "none";
    document.getElementById("feedback").innerText = "Well done for completing the challenge!";
    document.getElementById("score").innerText = "Final Score: " + score + "/" + questions.length;
  }
}
