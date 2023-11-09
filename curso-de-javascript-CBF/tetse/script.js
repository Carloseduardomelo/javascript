const acordel = document.getElementsByClassName('acord')

const resposta = document.getElementsByClassName('reposta')
let dados = []

for(let i = 0 ; i < resposta.length;i++){
    dados.push(resposta[i])
}

for(let i = 0; i < acordel.length ; i++){
    acordel[i].addEventListener("click" , () =>{
        if(dados[i].style.display == 'block'){
            dados[i].style.display = 'none'
            console.log('ok1')
        }else{
            dados[i].style.display = 'block'
        }
    })
    dados[i].style.display = 'none'
}



// // Seleciona a lista de itens
// const accordionItems = document.querySelectorAll(".acord");

// // Itera sobre os itens da lista
// accordionItems.forEach((item) => {
//   // Seleciona a div de conteúdo
//   const contentDiv = item.querySelector(".reposta");

//   // Adiciona um evento de clique ao item
//   item.addEventListener("click", () => {
//     // Verifica se o item está expandido
//     if (contentDiv.style.display === "block") {
//       // Contrai o item
//       contentDiv.style.display = "none";

//       console.log(contentDiv)
//     } else {
//       // Expande o item
//       contentDiv.style.display = "block";
//     }
// });
// contentDiv.style.display = 'none'
// });
