//CONSEGNA
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//prompt
const user_side = prompt(`scegli "pari" o "dispari"`)
const user_number = parseInt(prompt(`scegli un numero da 1 a 5`));
const stampUserNumber = document.querySelector(`.user_number`)
const stampPcNumber = document.querySelector(".pc_number")
const stampChosenSide = document.querySelector(".chosen_side")
const stampSum = document.querySelector(".sum")
//generare numeri random 
const pc_number = Math.floor(Math.random() *5 +1)
//inserire numeri e la scelta nell'html
stampChosenSide.innerHTML = `hai scelto ` + user_side
stampUserNumber.innerHTML = `il numero che hai scelto è: ` + user_number
stampPcNumber.innerHTML = `il numero che ha scelto il pc è : ` + pc_number
//sommare i numeri attraverso una funzione:
//istruzioni funzione
/**
 * questa funzione serve per eseguire la somma di due numeri
 * @param {num1} - il numero scelto dall'utente
 * @param {num2} - è il numero generato dal pc
 * @returns {somma} - è la somma dei due numeri
 */
//funzione
function sommaNumeri(num1, num2) {
    let result = num1 + num2;
    return result;
}
//invocare la funzione
let somma = sommaNumeri(user_number,pc_number)

//condizione per stabilire se è pari o dispari
if(somma % 2 == 0 && user_side == `pari`){
    stampSum.innerHTML = `la somma dei numeri è: ` + somma + `, il numero è pari e hai vinto`
}else if(somma % 2 != 0 && user_side == `dispari`) { 
    stampSum.innerHTML = `la somma dei numeri è: ` + somma + `, il numero è dispari e hai vinto`
}else if(somma % 2 == 0 && user_side == `dispari`){
    stampSum.innerHTML = `la somma dei numeri è: ` + somma + `, il numero è pari e hai perso`
}else if(somma % 2 != 0 && user_side == `pari`){
    stampSum.innerHTML = `la somma dei numeri è: ` + somma + `, il numero è dispari e hai perso`
}else{
    stampSum.innerHTML = `qualcosa è andato storto, probabilmente non hai inserito correttamente i dati, riprova! ` 
}


//CORREZIONE:
/*
const playerChoice = `pari`
const playerNumber = Number(4)

//generiamo un numero random
function getRandomNumber(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

const pcNumber = getRandomNumber(1,5)

//soommiamo i due numeri 
function sumTwoNumbers(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}

const sum = sumTwoNumbers(playerNumber,pc_number)
//stabiliamo se è paroi o dispari
function is_even(numero) {
    if (numero % 2 == 0){
        return true
    }
    return false
}

if (is_even(sum)){
    console.log(`numero pari`);
} else{
    console.log(`numero dispari`);
}
//dichiariamo chi ha vinto 
if (is_even(sum) && playerChoice == `pari`){
    console.log(`you win`,`numero pari`,sum);
} else if ( !is_even(sum) && playerChoice == `dispari`){
    console.log(`you win`,`numero pari`,sum);
}
*/