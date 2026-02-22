const questions = [ 
    { 
        question: "Inside which HTML element do we put the JavaScript?", 
        options: ["<scripting>", "<script>", "<javascript>", "<js>"], 
        answer: 1 
    }, 
    { 
        question: "Which language adds interactivity to a webpage?", 
        options: ["CSS", "JavaScript", "Python", "HTML"], 
        answer: 1 
    }, 
    { question: "How can you add a comment in JavaScript?", 
        options: ["//This is a comment", "<heading>", "<!--This is a comment-->", "<title>"], 
        answer: 2 
    } 
];
let currentIndex = 0; 
let score = 0;

const questionText = document.getElementById("questionText"); 
const optionsContainer = document.getElementById("optionsContainer"); 
const nextBtn = document.getElementById("nextBtn"); 
const resultContainer = document.getElementById("resultContainer"); 
const quizContainer = document.getElementById("quizContainer"); 
const scoreText = document.getElementById("scoreText"); 
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() { 
    nextBtn.disabled = true; 
    optionsContainer.innerHTML = "";

    let current = questions[currentIndex]; 
    questionText.textContent = current.question;

    current.options.forEach((option, index) => { 
        const btn = document.createElement("button"); 
        btn.textContent = option; 
        btn.classList.add("optionBtn");

        btn.addEventListener("click", () => selectAnswer(btn, index));

        optionsContainer.appendChild(btn); 
    }); 
}
function selectAnswer(button, index) { 
    let correctIndex = questions[currentIndex].answer;

    const buttons = document.querySelectorAll(".optionBtn"); 
    buttons.forEach(btn => btn.disabled = true);

    if (index === correctIndex) { 
        button.classList.add("correct"); 
        score++; 
    } else { 
        button.classList.add("incorrect"); 
        buttons[correctIndex].classList.add("correct"); 
    }
    nextBtn.disabled = false;
 }
 nextBtn.addEventListener("click", () => { 
    currentIndex++; 
    if (currentIndex < questions.length) { 
        loadQuestion(); 
    } else { 
        showResults(); 
    } 
});
function showResults() { 
    quizContainer.style.display = "none"; 
    resultContainer.style.display = "block"; 
    scoreText.textContent = `You scored ${score} out of ${questions.length}`; 
}
restartBtn.addEventListener("click", () => { 
    currentIndex = 0; 
    score = 0; 
    quizContainer.style.display = "block"; 
    resultContainer.style.display = "none"; 
    loadQuestion(); 
}); 
loadQuestion();