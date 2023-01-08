Lang: JavaScript
Type: reverse

Problem: 

The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

01 Test 1
Input
6
Expected output
3600

02 Test 2
Input
12
Expected output
14400

03 Test 3
Input
20
Expected output
40000

04 Test 4
Input
1
Expected output
100

05 Test 5
Input
9
Expected output
8100


Solution: 

const n = parseInt(readline());
console.log(n*n*100);
