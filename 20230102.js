Lang: JavaScript
Type: shortest

Problem: 

The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

01 Test 1
Input
3
4
Expected output
21

02 Test 2
Input
2
8
Expected output
20

03 Test 3
Input
0
8
Expected output
0

04 Test 4
Input
27
6
Expected output
891





Solution: 

const x = parseInt(readline());
const y = parseInt(readline());
console.log(x*(x+y));
