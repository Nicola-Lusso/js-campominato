// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


// VARIABILI
var numeriRandom, pcRandom, numeriUtente,numeriUtenteInt, numeroTentativi, count;

// Valori delle variabili
numeriRandom = [];
numeriUtente = [];
numeroTentativi = 84;
count = 0;


//Funzione che genera numeri Random
function numRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Ciclo while che genera 16 numeri random ***16 MINE***
while (numeriRandom.length < 16) {
    pcRandom = (numRandom(1 , 100));

    // Non possono essere generati due numeri uguali, quindi ciclo if per impedire ciò.
    if (numeriRandom.includes(pcRandom) == false){
    numeriRandom.push(pcRandom);
  }

}
console.log(numeriRandom);



// Inserire un numero alla volta,compreso tra 1 e 100, per 100-16 volte.
for (var i = 0; i <= numeroTentativi; i++ ){
  numeriUtenteInt = parseInt(prompt('Inserisci un numero tra 1 e 100, attento alle MINE 💣 '));

  // Se si inserisce un numero già presente nella lista dei numeri generati dal pc **GAME OVER**
  if (numeriRandom.includes(numeriUtenteInt) == true){
    alert('GAME OVER! 💣💣');
    // Partita terminata!
    break ;
  }

  // Non si può inserire lo stesso numero più volte.
  else if (numeriUtente.includes(numeriUtenteInt) == true) {
    alert('Numero già inserito, inserire un numero diverso!');
  }

  else {
    numeriUtente.push(numeriUtenteInt);
  }

  // Contatore per segnare il punteggio del giocatore
  count++;

}

alert("Il Tuo punteggio è " + ' ' + count + '  🕹️ ' );
