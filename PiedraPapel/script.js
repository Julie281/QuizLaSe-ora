let resetBtn = document.getElementById("reset");
let scoreplayer = document.getElementById("score-player");
let scorecomputer = document.getElementById("score-computer");
let btnplayer = [...document.getElementsByClassName("btn-player")];
let opiedraBtn = document.getElementById("opiedra");
let opapelBtn = document.getElementById("opapel");
let otijerasBtn = document.getElementById("otijeras");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

const jouerManche = (e) => {
  let choix = e.target.closest(".btn-player");

  btnplayer.forEach((btn) => {
    btn.classList.add("desactivated");
    btn.removeEventListener("click", jouerManche);
  });

  choix.classList.remove("desactivated");
  choix.classList.add("active");

  let choixplayer = choix.id;

  let choixOrdi = faireChoixOridnateur();

  verifierGagnant(choixplayer, choixOrdi);

  nextBtn.style.visibility = "visible";
};

const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

const faireChoixOridnateur = () => {
  // 0 = piedra
  // 1 = papel
  // 2 = tijeras

  let nbAleatoire = Math.floor(Math.random() * 3);

  switch (nbAleatoire) {
    case 0:
      opiedraBtn.classList.add("active");
      return piedra;
    case 1:
      opapelBtn.classList.add("active");
      return papel;
    default:
      otijerasBtn.classList.add("active");
      return tijeras;
  }
};

const verifierGagnant = (choixplayer, choixOrdi) => {
  if (choixplayer == choixOrdi) {
    message.textContent = "Empate!";
    return;
  }

  if (choixplayer == piedra) {
    if (choixOrdi == papel) {
      return victoirecomputer();
    } else if (choixOrdi == tijeras) {
      return victoireplayer();
    }
  }

  if (choixplayer == papel) {
    if (choixOrdi == tijeras) {
      return victoirecomputer();
    } else if (choixOrdi == piedra) {
      return victoireplayer();
    }
  }

  if (choixplayer == tijeras) {
    if (choixOrdi == piedra) {
      return victoirecomputer();
    } else if (choixOrdi == papel) {
      return victoireplayer();
    }
  }
};

const victoirecomputer = () => {
  message.textContent = "Cyber Gana";
  scorecomputer.textContent++;
};

const victoireplayer = () => {
  message.textContent = "Has ganado :)";
  scoreplayer.textContent++;
};

const preparerNouvelleManche = () => {
  btnplayer.forEach((btn) => {
    btn.classList.remove("desactivated");
    btn.classList.remove("active");

    btn.addEventListener("click", jouerManche);
  });

  nextBtn.style.visibility = "hidden";

  opiedraBtn.classList.remove("active");
  opapelBtn.classList.remove("active");
  otijerasBtn.classList.remove("active");

  message.textContent = "A jugar";
};

nextBtn.addEventListener("click", preparerNouvelleManche);

btnplayer.forEach((btn) => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click", () => {
  scoreplayer.textContent = 0;
  scorecomputer.textContent = 0;

  preparerNouvelleManche();
});