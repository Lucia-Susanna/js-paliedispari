// - Chiedere all’utente di inserire una parola
// - Creare una funzione per capire se la parola inserita è palindroma

// 1. CREO I DATI DI CUI HO BISOGNO: 
// - UN PROMPT IN CUI L'UTENTE INSERISCE LA PAROLA, 
// - UNA VARIABILE IN CUI SALVARE LA MIA PAROLA AL CONTRARIO
// - UN MESSAGGIO DA STAMPARE

let userWord = prompt('Digita una parola:')
let reverseUserWord=''
let message;

console.log(isPalindroma(userWord, reverseUserWord, message))

// 2. CREO LA MIA FUNZIONE IN CUI:
// - LA PAROLA VIENE GIRATA
// - LE DUE PAROLE VENGONO CONFRONTATE
// - GENERO UN OUTPUT IN BASE AL RISULTATO DEL COFRONTO
// - LA MIA FUNZIONE MI DEVE RIPORTARE L'OUTPUT, QUINDI LO DICHIARO NEL RETURN ALLA FINE DELLA FUNZIONE

function isPalindroma(word, reverseWord, output){

  for(let i=word.length-1; i>=0; i--){
   reverseWord+=word[i]
  }
  
  if(reverseWord===word){
    output = 'la parola è palindroma'
  } else{
    output = 'la parola NON è palindroma'
  }
  
  return output;
}

