Lang: JavaScript
Type: shortest

Problem: 

Your program must find the greatest common divisor for two integers.

The greatest common divisor of two integers is the largest positive integer that divides the numbers without a remainder.

INPUT:
Two integer numbers separated by a whitespace, a and b.

OUTPUT:
The greatest common divisor of a and b.

CONSTRAINTS:
0 < a,b ≤ 1000000

EXAMPLE:
Input
169 104

Output
13




Solution: 

var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(gcd(a,b));
