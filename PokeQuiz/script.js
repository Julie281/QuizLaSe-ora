document.addEventListener("DOMContentLoaded", function() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    let questionCount = 0;
    let score = 0;
  
    function getRandomPokemon() {
      if (questionCount < 10) {
        const randomId = Math.floor(Math.random() * 1000) + 1;
        return fetch(apiUrl + randomId)
          .then(response => response.json())
          .then(data => {
            const pokemon = {
              name: data.name,
              correctAnswer: data.name,
              options: [],
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`
            };
  
            for (let i = 0; i < 3; i++) {
              const randomOptionId = Math.floor(Math.random() * 1000) + 1;
              fetch(apiUrl + randomOptionId)
                .then(response => response.json())
                .then(optionData => {
                  pokemon.options.push(optionData.name);
                  if (pokemon.options.length === 3) {
                    displayQuestion(pokemon);
                  }
                });
            }
          });
      } else {
        showFinalScore();
      }
    }
  
    function displayQuestion(pokemon) {
      questionCount++;
      questionElement.innerText = `Pregunta ${questionCount}: ¿Cómo se llama este Pokemon?`;
      optionsElement.innerHTML = "";
  
      const pokemonImage = document.createElement("img");
      pokemonImage.src = pokemon.image;
      pokemonImage.alt = pokemon.name;
      optionsElement.appendChild(pokemonImage);
  
      const options = shuffleArray([...pokemon.options, pokemon.correctAnswer]);
      options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, pokemon.correctAnswer));
        optionsElement.appendChild(button);
      });
    }
  
    function checkAnswer(selected, correct) {
      if (selected === correct) {
        resultElement.innerText = "Correcto! 🎉";
        score++;
      } else {
        resultElement.innerText = `⚠️ No, este Pokemon se llama ${correct}. ⚠️`;
      }
      setTimeout(() => {
        resultElement.innerText = "";
        getRandomPokemon();
      }, 1500);
    }
  
    function showFinalScore() {
      questionElement.innerText = "¡Has terminado ✅!";
      resultElement.innerText = `Your final score is ${score}/10.`;
      optionsElement.innerHTML = ""; // Limpiar las opciones
      
      // Crear el botón de reinicio del juego
      const restartButton = document.createElement("button");
      restartButton.innerText = "Reiniciar Juego";
      restartButton.addEventListener("click", restartGame);
      optionsElement.appendChild(restartButton);
    }
  
    function restartGame() {
      questionCount = 0;
      score = 0;
      resultElement.innerText = "";
      getRandomPokemon();
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    getRandomPokemon();
  });
  