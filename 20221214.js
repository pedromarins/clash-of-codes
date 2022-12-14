Lang: JavaScript
Type: reverse


Problem: 


The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

01 Test 1
Input
2
-2
Expected output
1

02 Test 2
Input
1
-5

Expected output
0

03 Test 3
Input
5
5
Expected output
0


04 Test 4
Input
111101
-111101
Expected output
1

05 Test 5
Input
2
2
Expected output
0




Solution: 


const a = parseInt(readline());
const b = parseInt(readline());
if(a+b == 0) {console.log("1")} else {console.log("0")}

