// Como podemos melhorar o esse código usando TS? 

interface IPessoa{
    name: string
    age: number
    profili: "Atriz" | "Padeiro"
}

let pessoa1 = {} as IPessoa;
pessoa1.name = "maria";
pessoa1.age = 29;
pessoa1.profili = "Atriz"

let pessoa2 = {} as IPessoa
pessoa2.name = "roberto";
pessoa2.age = 19;
pessoa2.profili = "Padeiro";

let pessoa3:IPessoa = {
    name: "laura",
    age: 32,
    profili: "Atriz"
};

let pessoa4: IPessoa = {
    name: "carlos",
    age: 19,
    profili: "Padeiro"
}