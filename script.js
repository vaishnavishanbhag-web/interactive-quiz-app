const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks Text Mark Language",
    d: "Hyper Tool Multi Language",
    correct: "a"
  },
  {
    question: "Which language is used for styling?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("next");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function deselectAnswers() {
  answersEls.forEach(answer => answer.checked = false);
}

function getSelected() {
  let answer;
  answersEls.forEach(ans => {
    if (ans.checked) answer = ans.id;
  });
  return answer;
}

nextBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (!answer) return alert("Select an answer!");

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>You scored ${score}/${quizData.length}</h2>
       <button onclick="location.reload()">Restart Quiz</button>`;
  }
});
