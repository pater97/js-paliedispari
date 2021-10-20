//CONSEGNA
/*
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

//variabile per la stampa 
const stamp = document.querySelector(".stamp")
//prompt
const user_word = prompt(`inserisci una parola`);
//scomposizione della parola in un array
let word_split = user_word.split(``)
//invertire ordine array
const word_reverse = word_split.reverse()
//ciclo for per ricomporre la parola 
let final_word = (``)
for(let i = 0 ; i < word_reverse.length; i++){
    const confront_word = word_reverse[i]
    final_word += confront_word
    console.log(final_word);
}
//condizione e stampa
if(user_word == final_word){
    stamp.classList.add(`green`)
    stamp.innerHTML = `la parola che hai scelto è palindrome!`
} else {
    stamp.classList.add(`red`)
    stamp.innerHTML = `mi dispiace, questa parola non è palindrome!`
}


//correzione
/*

const userWord = `redivider`

function is_palindrom(word){
    //rigirare la parola 
    const reverseWord =  word.split(``).reverse().join(``)
    //capire se è palindroma o meno
    if(word == reverseWord){
        return true
    }
    return false 
}


if (is_palindrom(user_word)){
    console.log(`la parola è palindroma`);
}else {
    console.log(`la funzione non è palindroma`);
}

*/