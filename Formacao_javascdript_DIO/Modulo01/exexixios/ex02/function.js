function encontrarMaiorImparEPar() {
    var n = [1,2,3,4,5,6,7,8]
    var valor = n
    n = n.length

    var menorImpar = -Infinity;
    var maiorPar = -Infinity;

    for (var i = 0; i < n; i++) {
        if (valor[i] % 2 === 0) { // valor é par
            if (valor[i] > maiorPar) {
                maiorPar = valor[i];
            }
        } else { // valor é ímpar
            if (valor[i] > menorImpar) {
                menorImpar = valor[i];
            }
        }
    }

    console.log("Maior valor par: " + (maiorPar !== -Infinity ? maiorPar : "Nenhum valor par encontrado"));
    console.log("Maior valor ímpar: " + (menorImpar !== -Infinity ? menorImpar : "Nenhum valor ímpar encontrado"));
}

encontrarMaiorImparEPar();
