interface Iemployee{
    code?: number
    name?: string
}

let employee1:Iemployee = {}

employee1.code = 10
employee1.name = 'carlos'

console.log(employee1)

let employee2 = {
    code: 10,
    name: 'carlos'
}

console.log(employee2)


type employee00 ={
    code: number
    name: string
}

let employee3: employee00 = {
    code: 10,
    name: 'carlos'
}

console.log(employee3)


let employee4 = {
    code: 10,
    name: 'carlos'
} as Iemployee


