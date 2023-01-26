//Resultados do Clash of CoDe da Comunidade CoDe em Janeiro de 2023

//1
const n = parseInt(readline());

let atual = 1
let soma = atual

for(i=1;i<n;i++) {
    atual += 2
    soma += atual
}

console.log(soma);

//2
const num = readline().split('');

let final = 1
num.forEach( (e) => {
    final *= parseInt(e) 
})

console.log(final);

//3
const N = parseInt(readline());

let produto = 1
let soma = 0
for(i=1;i<=N;i++) {
    produto *= i
    soma += i
}

console.log(produto)
console.log(soma);

//4
const s = readline().split('');

let a = 0
let c = 0
let g = 0
let t = 0

s.forEach( (e) => {
    if(e == 'A') {
        a++
    } else if (e == 'C') {
        c++
    } else if (e == 'G') {
        g++
    } else {
        t++
    }
})

console.log(a + ' ' + c + ' ' + g + ' ' + t);

//5
const length = parseInt(readline());
const width = parseInt(readline());
const height = parseInt(readline());

console.log(2*((width*length)+(height*length)+(width*height)));
