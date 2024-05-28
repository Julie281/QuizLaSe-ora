const colors = ['R', 'G', 'B', 'Y', 'O', 'P'];
const secretCode = generateSecretCode();
let attempts = 10;
let currentGuess = [];
let guessHistory = [];

function generateSecretCode() {
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += colors[Math.floor(Math.random() * colors.length)];
    }
    return code;
}

console.log('Secret Code:', secretCode); // For debugging purposes

document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (currentGuess.length < 4) {
            const color = this.getAttribute('data-color');
            currentGuess.push(color);
            updateCurrentGuess();
        }
    });
});

function updateCurrentGuess() {
    const guessDisplay = document.getElementById('currentGuess');
    guessDisplay.innerHTML = '';
    currentGuess.forEach(color => {
        const colorElem = document.createElement('button');
        colorElem.className = 'color-btn';
        colorElem.style.backgroundColor = getColorFromCode(color);
        guessDisplay.appendChild(colorElem);
    });
}

function getColorFromCode(code) {
    switch (code) {
        case 'R': return 'red';
        case 'G': return 'green';
        case 'B': return 'blue';
        case 'Y': return 'yellow';
        case 'O': return 'orange';
        case 'P': return 'purple';
    }
}

function makeGuess() {
    if (currentGuess.length !== 4) {
        document.getElementById('message').innerText = 'Por favor, seleciona 4 colores';
        return;
    }

    const guessString = currentGuess.join('');
    attempts--;
    const feedback = getFeedback(guessString, secretCode);
    displayGuess(currentGuess, feedback);
    guessHistory.push({ guess: [...currentGuess], feedback });

    if (feedback.correctPositions === 4) {
        document.getElementById('message').innerText = '🎉 Felicitaciones 🎉 Encontraste el codigo ';
        displaySecretCode();
        disableInput();
    } else if (attempts === 0) {
        document.getElementById('message').innerText = '☠️ Game Over ☠️! El codigo era:';
        displaySecretCode();
        disableInput();
    } else {
        document.getElementById('message').innerText = `Te quedan ${attempts} intentos 🧐`;
        currentGuess = [];
        updateCurrentGuess();
    }
}

function getFeedback(guess, code) {
    let correctPositions = 0;
    let correctColors = 0;
    let codeCopy = code.split('');

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === code[i]) {
            correctPositions++;
            codeCopy[i] = null;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== code[i] && codeCopy.includes(guess[i])) {
            correctColors++;
            codeCopy[codeCopy.indexOf(guess[i])] = null;
        }
    }

    return { correctPositions, correctColors };
}

function displayGuess(guess, feedback) {
    const board = document.getElementById('board');
    const guessElem = document.createElement('div');
    guessElem.className = 'guess-history-item';

    guess.forEach(color => {
        const colorElem = document.createElement('button');
        colorElem.className = 'color-btn';
        colorElem.style.backgroundColor = getColorFromCode(color);
        guessElem.appendChild(colorElem);
    });

    const feedbackElem = document.createElement('div');
    feedbackElem.innerHTML = `
        Posición correcta: ${feedback.correctPositions}<br>
        Color correcto: ${feedback.correctColors}
    `;
    guessElem.appendChild(feedbackElem);

    board.appendChild(guessElem);
}

function displaySecretCode() {
    const message = document.getElementById('message');
    const codeDisplay = document.createElement('div');
    codeDisplay.className = 'secret-code-display';

    secretCode.split('').forEach(color => {
        const colorElem = document.createElement('button');
        colorElem.className = 'color-btn';
        colorElem.style.backgroundColor = getColorFromCode(color);
        codeDisplay.appendChild(colorElem);
    });

    message.appendChild(codeDisplay);
}

function disableInput() {
    document.getElementById('colorChoices').style.pointerEvents = 'none';
    document.getElementById('submitGuess').disabled = true;
}
