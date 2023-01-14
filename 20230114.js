Lang: JavaScript
Type: shortest

Problem: 

Duas variáveis a e b. Somar todos os números entre a e b, inclusos.


Solution: 

var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

let count = 0
for(i=a; i<= b; i++) {
    count+=i
}

console.log(count);
