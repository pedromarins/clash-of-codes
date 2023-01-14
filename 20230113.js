Lang: JavaScript
Type: fastest

Problem: 

Given two integers a and b :
- Concatenate their difference, product and sum,
- Then convert the result into an integer

Input
Two lines : the integers a and b

Output
The concatenation of a-b, a*b and a+b, expressed as an integer (remove leading zeroes)

Constraints
0 <= a, b < 2^31

Example
Input
5
3
Output
2158


Solution: 

const a = parseInt(readline());
const b = parseInt(readline());

console.log(((a-b!=0) ? (a-b).toString(): 0)+((a*b!=0) ? (a*b).toString(): 0)+((a+b!=0) ? (a+b).toString(): 0));
