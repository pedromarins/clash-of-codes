Lang: JavaScript
Type: fastest

Problem: 

Consider a lemonade shop that sells bottles of lemonade. You can buy 1 bottle of lemonade with 1 coin. 3 empty bottles can be exchanged for 1 full bottle of lemonade. You can borrow (any number of) empty bottles from the shop if necessary, but you need to give them back at the end.

Given the number of coins you have at the start, how many bottles of lemonade can you drink at most?

E.g.
Input: 1
Output: 1
You have 1 coin, and buy 1 bottle of lemonade.

Input: 2
Output: 3
You have 2 coins. After drinking 2 bottles of lemonade, you can borrow 1 empty bottle, exchange them for 1 full bottle of lemonade, then give the empty bottle back.

Input
An integer c represents the number of coins you have.

Output
An integer b represents the number of bottles of lemonade you can drink.

Constraints
1≤c≤1000

Example
Input
1

Output
1




Solution: 

let bottles = coins; 
let empties = bottles;
while (empties >= 3) {
  const fulls = Math.floor(empties / 3);
  bottles += fulls;
  empties = empties % 3 + fulls;
}
if(empties<3 && empties >1) bottles+=1
console.log(bottles)
