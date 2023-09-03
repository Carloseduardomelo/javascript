"use strict";
const input = document.getElementById('input');
const button = document.getElementById('button');
const tela = document.getElementById('tela');
const carlos = {
    age: 17,
    cite: 'aliança',
    name: 'carlos',
    profile: "programador(a)",
    sex: "masculino",
    escol: 'matanort',
    materia: ['matematica', 'fisica', 'arte']
};
button.addEventListener('click', () => {
});
function mostraList(list) {
    for (let item of list) {
        tela.innerHTML += `<p> ${item} </p>`;
    }
}
mostraList(carlos.materia);
function addMateria(novaMateria, arradeMateria, tela) {
    if (arradeMateria.includes(novaMateria) === true || novaMateria === "" || arradeMateria.length === 10) {
        alert('essa materia ja esta adicionada ou o input estar vazio ou ja passou do limite de 10 materias');
    }
    else {
        arradeMateria.push(novaMateria);
        tela.innerHTML = arradeMateria.map(item => `<p> ${item} </p>`).join('');
        input.value = '';
        console.log(arradeMateria);
        return console.log(arradeMateria.includes(novaMateria));
    }
}
button.addEventListener('click', () => {
    addMateria(input.value, carlos.materia, tela);
});
