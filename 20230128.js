Lang: JavaScript
Type: reverse

Problem: 

Input
Expected output
1
0
1
0
02 Test 2
Input
Expected output
6
6
9
9
03 Test 3
Input
Expected output
278
890
890
278
04 Test 4
Input
Expected output
5
9
5
9




Solution: 

const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

if(a==b) {
    console.log(c);        
} else if (b==c) {
    console.log(a);
} else {
    console.log(b);
}


