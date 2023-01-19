Lang: JavaScript
Type: reverse

Problem: 

The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

01 Test 1
Input
10 0
Expected output
aaaaaaaaaa

02 Test 2
Input
5 1
Expected output
abcde

03 Test 3
Input
Expected output
33 3
adgjmpsvybehknqtwzcfiloruxadgjmps
04 Test 4
Input
Expected output
15 25
azyxwvutsrqponm
05 Test 5
Input
Expected output
99 17
arizqhypgxofwnevmdulctkbsjarizqhypgxofwnevmdulctkbsjarizqhypgxofwnevmdulctkbsjarizqhypgxofwnevmdulc



Solution: 

// solução parcial. Não consegui dar a volta e retornar ao início do alfabeto novamente

var inputs = readline().split(' ');
const n = parseInt(inputs[0]);
const d = parseInt(inputs[1]);

let letra = 'a'
let texto = ''

for(i=0;i<n;i++) {
    texto += letra
    letra = String.fromCharCode(letra.charCodeAt(0) + d)
}

console.log(texto);

