//! Os operadores de condições são feitos para fazer verificações entre dos termos, no javascript temos tres operadores de condições que são eles IF, ELSE , ELSEIF e o SWITCH

//todos/ exemple

//*  if

let idade = 18;
if (idade == 18) {
    console.log("maior de idade");
}

//*  else

let idade01 = 18;
if (idade01 >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}


//*  else if

let idade02 = 18;

if (idade02 >= 18) {
    console.log("maior de idade");
} else if (idade02 < 18) {
    console.log("menor de idade");
} else {
    console.log("menor de idade");
}


//*  switch

let idade03 = 18;
switch (idade03) {
    case 18:
        console.log("maior de idade");
        break;
    case 19:
        console.log("menor de idade");
        break;
    default:
        console.log("não existe");
}

//! exemplo de condições
