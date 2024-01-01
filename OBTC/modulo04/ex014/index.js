const media = ([...dados]) => {
  let media = 0
  for (i of dados) {
    media += i
  }
  return media / dados.length
}


console.log(media([2, 2]))


const dados = [1, 2, 3, 3, 3, 3, 4, 7]

const moda = ([...total]) => {

  const dados = [...total]
  const modas = []
  let max = 0
  let arrayDadosFinal = []

  function getIndices(arr, item) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        indices.push(i);
      }
    }
    return indices;
  }

  for (let i = 0; i < dados.length; i++) {
    modas.push([
      dados[i], getIndices(dados, dados[i]).length
    ])
  }

  for (let i = 0; i < modas.length; i++) {
    if (modas[i][1] > max) {
      max = modas[i][1]
      arrayDadosFinal.push(modas[i][0], modas[1][1])
      arrayDadosFinal.shift()
    } else {
    }

  }

  return arrayDadosFinal

}

console.log(moda([1, 2, 3, 4, 4, 4, 4, 4, 4, 1]))


const mediana = (dados) => {
  if (dados.length % 2 == 0) {
    dados.sort((a,b) => a - b)
    const mediana = ((dados.length / 2) + ((dados.length / 2) + 1)) / 2

    return mediana
  } else {
    dados.sort((a,b) => a - b)
    const mediana = parseInt((dados.length / 2) + 1)

    return mediana
  }
}


console.log(mediana([1,2,3,4]))


const mediaPoderada = (dados) => {

  let somados = 0
  let somadosX = 0

  for (let i = 0; i < dados.length; i++) {
    somados += Number(dados[i].y * dados[i].x)
  }

  for (let i = 0; i < dados.length; i++) {
    somadosX += dados[i].x
  }

  return somados / somadosX
}

console.log(mediaPoderada(
  [
    {
      y: 10,
      x: 2
    },
    {
      y: 20,
      x: 2
    }
  ]
))