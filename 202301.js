Lang: JavaScript
Type: shortest

The program:
Your program must read two numbers and output the concatenation of their difference and sum.

INPUT:
Two positive integers A and B.

OUTPUT:
The concatenated results of A-B and A+B.

CONSTRAINTS:
A > 0
B > 0

EXAMPLE:
Input
6 4

Output
210



Solution: 

var inputs = readline().split(' ');

const A = parseInt(inputs[0]);
const B = parseInt(inputs[1]);

console.log((A-B).toString()+(A+B).toString());
