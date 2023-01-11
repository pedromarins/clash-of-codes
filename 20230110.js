Lang: JavaScript
Type: shortest

Problem: 

David Christ loves The World. He takes care of it every day. Every yearthe world's population is 10% more than the previous year.
Output the world population after n years.

Input
Line 1: c, the beginning world population
Line 2: n, the number of years passed.

Output
r, the resulting population rounded down.

Constraints
1<=c<=200
1<=n<=50

Example

Input
10
3

Output
13


Solution: 

let c = parseInt(readline());
const n = parseInt(readline());

for(i=0;i<n;i++) {
    c = c*1.1
} 

console.log(Math.floor(c));
