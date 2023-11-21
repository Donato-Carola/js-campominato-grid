
//!Consegna

/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//! Creo la variabile const button per richiamarla

const button = document.querySelector('button')
const mainGrid = document.querySelector('main')



//! Una volta richiamata le assococio l'evento click, cioè quando clicca il button crea i quadrati
button.addEventListener('click', function(){
    for(let i=1; i<=100; i++){
     const boxSquare = document.createElement('span')
     mainGrid.appendChild(boxSquare)
    }
    
    
})