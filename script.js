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
        question: "What's in a name? That which we call a rose by any other name would smell as sweet.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "All the world's a stage, and all the men and women merely players.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "The course of true love never did run smooth.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "We fall, so we can learn to pick ourselves up.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman"
    },
    {
        question: "I have one rule: I don't kill.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman"
    },
    {
        question: "The lady doth protest too much, methinks.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "I knew you were trouble when you walked in.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You belong with me.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "I know of no way of judging the future but by the past.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "We are not interested in the possibilities of defeat. They do not exist.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "Like all the best families, we have our share of eccentricities, of impetuous and wayward youngsters and of family disagreements.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "I may not be a lion, but I am a lion's cub, and I have a lion's heart.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "No matter how much time passes, no matter what takes place in the interim, there are some things we can never assign to oblivion, memories we can never rub away.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "Cowards die many times before their deaths; the valiant never taste of death but once.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "Double, double toil and trouble; Fire burn and cauldron bubble.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "There is nothing either good or bad, but thinking makes it so.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "The better part of valor is discretion.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "It's time for justice.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman"
    },
    {
        question: "Tell me, do you bleed? You will.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman"
    },
    {
        question: "The symbol is what's important. The symbol is everything.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Batman"
    },
    {
        question: "And I'll write your name.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "Cause darling, I'm a nightmare dressed like a daydream.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "Band-Aids don't fix bullet holes.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You're the king, baby I'm your queen.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You can hear it in the silence, silence, you, you can feel it on the way home, way home, you can see it with the lights out, lights out, you are in love, true love.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "This love is good, this love is bad, this love is alive back from the dead, oh these hands had to let it go free and this love came back to me.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You can tell me when it's over, if the high was worth the pain.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "And all at once you are the one I have been waiting for, king of my heart, body and soul, ooh whoa.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "'Cause darling, I'm a nightmare dressed like a daydream.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You'll see me in hindsight, tangled up with you all night, burning it down.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "The lights are so bright but they never blind me, me. Welcome to New York, it's been waiting for you.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "I have to be seen to be believed.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "It's all to do with the training: you can do a lot if you're properly trained.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "The Queen"
    },
    {
        question: "And I couldn't be sure. I had a feeling so peculiar, this pain wouldn't be for evermore.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "You drew stars around my scars, but now I'm bleeding.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "Long story short, it was a bad time. Long story short, I survived.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "So much for summer love, and saying 'us,' 'cause you weren't mine to lose.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    {
        question: "But I'm a fire and I'll keep your brittle heart warm, if your cascade ocean wave blues come.",
        answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
        correctAnswer: "Taylor Swift"
    },
    //{ 
    //    question: "Pregunta", 
    //   answers: ["Shakespeare", "Taylor Swift", "Batman", "The Queen"],
    //    correctAnswer: "Respuesta" 
    //},
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