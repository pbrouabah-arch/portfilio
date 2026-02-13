const questions = [
  {
    question: "1) What is my biggest goal right now?",
    options: [
      "To travel for fun",
      "To study in Turkey and grow academically",
      "To stop studying",
      "To become famous"
    ],
    correct: 1
  },
  {
    question: "2) What describes my mindset best?",
    options: [
      "I avoid challenges",
      "I only care about money",
      "I believe growth comes from new experiences",
      "I dislike learning"
    ],
    correct: 2
  },
  {
    question: "3) Why do I want to study in different countries after Turkey?",
    options: [
      "Because I don’t like Turkey",
      "Because I want international experiences and new perspectives",
      "Because I want to change majors",
      "Because I want to stop working"
    ],
    correct: 1
  },
  {
    question: "4) What makes my future project special?",
    options: [
      "It mixes technology with creativity and design",
      "It is only about sports",
      "It is only about history",
      "It is about cooking"
    ],
    correct: 0
  },
  {
    question: "5) What is my long-term dream (20 years plan)?",
    options: [
      "Open a café",
      "Create a school",
      "Build a hospital to serve people",
      "Become a professional athlete"
    ],
    correct: 2
  },
  {
    question: "6) What is my main motivation?",
    options: [
      "Easy life without work",
      "Building a meaningful future and reaching my full potential",
      "Being better than everyone",
      "Getting rich quickly"
    ],
    correct: 1
  },
  {
    question: "7) What is my future academic plan after graduating in Turkey?",
    options: [
      "Stop studying",
      "Continue higher studies in Canada or Spain",
      "Change to medicine immediately",
      "Work as a singer"
    ],
    correct: 1
  },
  {
    question: "8) What is my language level?",
    options: [
      "English and French are advanced",
      "English and French are intermediate",
      "I don’t speak any foreign language",
      "Only Turkish"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let answered = false;
let score = 0;

function loadQuestion() {
  answered = false;
  document.getElementById("result").textContent = "";
  document.getElementById("nextBtn").style.display = "none";

  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById("btn" + i);
    btn.textContent = q.options[i];
    btn.disabled = false;
  }
}

function checkAnswer(selected) {
  if (answered) return;

  answered = true;
  const q = questions[currentQuestion];
  const resultText = document.getElementById("result");

  if (selected === q.correct) {
    score++;
    resultText.textContent = "✅ Correct!";
    resultText.style.color = "#00ff99";
  } else {
    resultText.textContent =
      "❌ Wrong! The correct answer is: " + q.options[q.correct];
    resultText.style.color = "#ff6666";
  }

  for (let i = 0; i < 4; i++) {
    document.getElementById("btn" + i).disabled = true;
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.querySelector(".quiz-box").innerHTML = `
      <h2 class="gold-text">🎉 Quiz Finished!</h2>

      <p style="font-size:20px; margin-top:15px;">
        <span class="gold-text">Your Score:</span>
        <span style="color:#00ff99; font-weight:bold;">
          ${score} / ${questions.length}
        </span>
      </p>

      <p style="font-size:16px; line-height:1.7; margin-top:20px;">
        <span class="gold-text">
          In this portfolio, you will find some projects that I created based on my own knowledge and learning experience.
        </span><br><br>

        <span class="gold-text">
          I also used some help from artificial intelligence, especially to understand new ideas and improve my work.
        </span><br><br>

        <span class="gold-text">
          Some of these projects were created especially for this scholarship application, and others were made during my learning journey.
        </span><br><br>

        <span class="gold-text">
          Thank you for taking the time to review my portfolio.
        </span>
      </p>
    `;
  } else {
    loadQuestion();
  }
}

loadQuestion();
