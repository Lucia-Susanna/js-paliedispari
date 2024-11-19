// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. CREO DUE PROMPT IN CUI L'UTENTE INSERISCE INSERISCE UN NUMERO DA 1 A 5 E L SCELTA
// 2. CREO LA VARIABILE PC NUMBER
// 3. DETERMINO I PARAMETRI VALIDI USANDO I CICLI WHILE:
// - IL NUMERO INSERITO DEVE ESSERE COMPRESO TRA 1 E 5
// - LA GIOCATA DEVE ESSERE PARI O DISPARI

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5:'));

while (userNumber>5 || userNumber<1){
  userNumber = prompt('Inserisci un numero da 1 a 5:');
}

let userChoice = prompt('Inserisci la tua giocata (PARI o DISPARI):').toUpperCase();


while ((userChoice !== 'PARI') && (userChoice !== 'DISPARI')){
  userChoice = prompt('Inserisci la tua giocata (PARI o DISPARI):');
}

let pcNumber = parseInt(randomNumber(5));


// 4. CREO LA FUNZIONE CHE MI ESTRAE UN NUMERO CASUALE PER IL PC

function randomNumber(maxNum){      
  return Math.ceil(Math.random() * maxNum);
} 

// 5. SOMMO I NUMERI CREANDO UNA FUNZIONE SOMMA

let finalNumber = somma(userNumber, pcNumber)

function somma(num1, num2){
  return num1 + num2;
}

// 6. CREO UNA FUNZIONE CHE MI STABILISCE LE LA SOMMA DEI NUMERI è PARI O DISPARI
let risultato = pariDispari(finalNumber)


function pariDispari (num){
  let output;

  if (num%2){
    output = 'DISPARI';
  } else {
    output = 'PARI';
  }     
  return output;
}

// 7. COMPARO IL RISULTATO CON LA GIOCATA DELL'UTENTE E STABILISCO IL VINCITORE

let message;

if (userChoice === risultato){
  message = `HAI VINTO! La somma di ${userNumber} e ${pcNumber} è ${finalNumber}, quindi è ${risultato}.`
} else{
  message = `HAI PERSO! La somma di ${userNumber} e ${pcNumber} è ${finalNumber}, quindi è ${risultato}.`
}

// 8. STAMPO IL MESSAGGIO

alert(message)