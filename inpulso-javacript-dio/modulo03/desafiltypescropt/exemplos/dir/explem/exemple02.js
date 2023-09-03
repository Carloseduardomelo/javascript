"use strict";
const button1 = document.getElementById('button');
const button2 = document.getElementById('button2');
const input01 = document.getElementById('input01');
const input02 = document.getElementById('input02');
const select = document.getElementById('select');
function soma(n1, n2, deveprintar, frase) {
    if (deveprintar) {
        return console.log(`${frase}:  ${n1 + n2}`);
    }
    else {
        return console.log('não deve printar');
    }
}
let deveprintar = true;
const frase = `o numero resultado e `;
button2.addEventListener('click', () => {
    if (deveprintar) {
        deveprintar = false;
    }
    else {
        deveprintar = true;
    }
});
button.addEventListener('click', () => {
    soma(Number(input01.value), Number(input02.value), deveprintar, frase);
});
/*
"scripts": {
    "watch" : "tsc --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

*/ 
