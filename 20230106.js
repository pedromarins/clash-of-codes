Lang: JavaScript
Type: fastest

Problem: 

The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
+-+--+-+++--+
Expected output
1

02 Test 2
Input
+++++++---
Expected output
4

03 Test 3
Input
-+-+-+-+-+-+
Expected output
0

04 Test 4
Input
------------++----+
Expected output
-13

Solution: 

const s = readline().split('');
let count = 0
s.forEach((e) => {
    if(e=="+") {
        count++
    } else {
        count--
    }
})
console.log(count)
