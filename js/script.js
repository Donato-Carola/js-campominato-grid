//!Consegna

/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//! Creo la variabile const button per richiamarla

const button = document.querySelector("button");
const mainGrid = document.querySelector("section");

//! Evento aggiunto al button, il quale una volta cliccato compaiono i numeri 
button.addEventListener("click", function () {
  
    for (let i = 1; i <= 100; i++) {
    const square = createSquare();
    const randomNumber = i;
    square.innerHTML += `${randomNumber}`;
     
    square.addEventListener('click', function(){
        square.classList.add('bgcolor')
        console.log(i)

        
    })
  }
});







//! Funzione creare i numeri random a nostro piacimento
function numberRandom(minNumber, maxNumber) {
  const numberRandomPc = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  return numberRandomPc;
}

//! Funzione per la creazione dei quadrati
function createSquare() {
  const createElemSquare = document.createElement("span");
  mainGrid.appendChild(createElemSquare);
  return createElemSquare;
}
