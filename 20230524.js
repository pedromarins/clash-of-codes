# Lang: JavaScript
# Type: reverse

## Problem: 

It is about to find out if a number can be divided by three or not. Negative numbers should be sorted out.

The divisibility rule of 3 states that if the sum of all digits of a number is a multiple of 3, the number is completely divisible by 3.
Input
A single integer N.
Output
The value ...

no negative numbers - if N<0
true - if N can be divided by 3
false - if N cannot be divided by 3
Constraints
-999.000.000<N<999.000.000
Example
Input
123456789
Output
true

## Solution: 

const N = parseInt(readline());

if(N < 0) {
    console.log('no negative numbers');
} else if(N%3==0) {
    console.log('true');
} else {
    console.log('false');
}

