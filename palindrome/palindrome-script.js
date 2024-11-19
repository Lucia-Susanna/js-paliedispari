// - Chiedere all’utente di inserire una parola
// - Creare una funzione per capire se la parola inserita è palindroma

// 1. CREO UN PROMPT IN CUI L'UTENTE INSERISCE LA PAROLA
let userWord = prompt('Digita una parola:')
let reverseUserWord=''
let message;

  for(let i=userWord.length-1; i>=0; i--){
   reverseWord+=userWord[i]
  }
  
  if(reverseWord===userWord){
    message = 'la parola è palindroma'
  } else{
    message= 'la parola NON è palindroma'
  }

console.log(message)
