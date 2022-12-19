Lang: JavaScript
Type: reverse


Problem: 

The program:
Your given a scrambled sentence. You must output an unscrambled version of the same sentence using these rules:
- First, print one in every two characters.
- Then print every other character starting from the end, going backwards. Make sure you handle strings of both even and odd lengths.

INPUT:
Line 1: One string scrambled.

OUTPUT:
A single line containing an unscrambled version of scrambled.

CONSTRAINTS:
scrambled contains at least 1 character.
scrambled contains less than 400 characters.

EXAMPLE:
Input
H!e ldllor oW

Output
Hello World !


Solution: 


const scrambled = readline().split('');
let w = ''
for(i=0; i<scrambled.length; i=i+2) {
    w += scrambled[i]
}
for(j=scrambled.length-2; j>=0; j=j-2) {
    w += scrambled[j]
}
console.log(w);

