Lang: JavaScript
Type: fastest

Problem: 

// Output the (signed) size of the range [ N, 1000-N ]

// Input
// The integer N

// Output
// one integer

// Constraints
// 0 ≤ N ≤ 1000

// Example
// Input
// 15
// Output
// 970


Solution: 

const n = parseInt(readline());

console.log(1000-(n*2))