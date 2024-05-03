const questions = [
    { 
        question: "Did I close my fist around something delicate? Did I shatter you?", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"], 
        correctAnswer: "Taylor Swift" 
    },
    { 
        question: "It's time for justice.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "I won't kill you, but I don't have to save you.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "It's not about what I want; it's about what's fair!", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "I'm not afraid of you. I'm afraid of what I'll do to you.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "I wear a mask. And that mask, it's not to hide who I am, but to create what I am.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "In the end, we are all alone. And no one's coming to save you.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "I don't need to be afraid of the dark. I'm the one who made it dark.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "Every villain is a hero in his own mind.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "The only way to rid yourself of temptation is to yield to it.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "I wear the mask to protect those I love.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman" 
    },
    { 
        question: "All that glitters is not gold.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare" 
    },
    { 
        question: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare" 
    },
    { 
        question: "If music be the food of love, play on.", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare" 
    },
    { 
        question: "Pregunta", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Respuesta" 
    },
    { 
        question: "Pregunta", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Respuesta" 
    },
    { 
        question: "Pregunta", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Respuesta" 
    },
    { 
        question: "Pregunta", 
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Respuesta" 
    },
    // Añadir más preguntas aquí...
];

const questionContainer = document.getElementById('question-container');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart-btn'); // Botón de reinicio

let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function displayNextQuestion() {
    resetState();
    if (currentQuestionIndex < 10) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showResult();
    }
    currentQuestionIndex++;
}

function showQuestion(question) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerText = question.question;
    questionContainer.appendChild(questionDiv);

    const answerButtonsDiv = document.getElementById('answer-buttons');
    resetAnswerButtons(answerButtonsDiv); // Limpiar los botones de respuesta

    question.answers.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('answerButton');
        answerBtn.innerText = answer;
        answerBtn.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));
        answerButtonsDiv.appendChild(answerBtn);
    });
}

function resetAnswerButtons(answerButtonsDiv) {
    // Limpiar el contenedor de botones de respuesta
    while (answerButtonsDiv.firstChild) {
        answerButtonsDiv.removeChild(answerButtonsDiv.firstChild);
    }
}

function selectAnswer(selectedAnswer, correctAnswer) {
    userAnswers.push({ selectedAnswer, correctAnswer });
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    displayNextQuestion();
}

function resetState() {
    while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
    }
}

function showResult() {
    resultDiv.innerHTML = `Tu puntuación es ${score}/10.<br><br>`;
    userAnswers.forEach((answer, index) => {
        const questionText = shuffledQuestions[index].question;
        const div = document.createElement('div');
        div.classList.add('answer');
        div.innerHTML = `${index + 1}: ${questionText}<br/> Tu respuesta: ${answer.selectedAnswer}. <br/> Respuesta correcta: ${answer.correctAnswer}.`;
        if (answer.selectedAnswer === answer.correctAnswer) {
            div.classList.add('correct');
        } else {
            div.classList.add('incorrect');
        }
        resultDiv.appendChild(div);
    });
    // Limpiar los botones de respuesta después de mostrar los resultados
    const answerButtonsDiv = document.getElementById('answer-buttons');
    resetAnswerButtons(answerButtonsDiv);

    restartButton.style.display = 'block'; // Mostrar el botón de reinicio
}
// Función para reiniciar el juego
function restartGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    resultDiv.innerHTML = ''; // Limpiar los resultados
    restartButton.style.display = 'none'; // Ocultar el botón de reinicio
    displayNextQuestion(); // Comenzar el juego nuevamente
}

restartButton.addEventListener('click', restartGame); // Agregar evento de clic al botón de reinicio

displayNextQuestion();