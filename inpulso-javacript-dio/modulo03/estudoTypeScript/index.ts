const input = document.getElementById('input') as HTMLInputElement

interface Ianimal{
    name?: string
    cor?: string
    tipo?: 'ave' | 'repeter'
    mora?: string
    porte?: 'pequeno' | 'media' | 'grande'
    age?: number
    nascel?: number
}


const Cachorro: Ianimal = {
    cor: 'black',
    mora: 'casa',
    name: 'pitaia',
    porte: 'media',
    tipo: "repeter",
    age: 20,
    nascel: 2022
}


console.log(input.value)