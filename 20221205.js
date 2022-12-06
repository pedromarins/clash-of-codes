Lang: JavaScript
Type: shortest


Problem: 

In a cage, there are several chickens and rabbits.
Given the number of heads and legs in the cage, find out how many chickens and rabbits are there.

Note that every chicken have 2 legs and every rabbit have 4 legs.
Input
Integer heads and legs, separated with a space
Output
The number of chickens and rabbits
Constraints
1 < heads < 101
1 < legs < 401
Example
Input
30 90
Output
15 15



Solution: 


var inputs = readline().split(' ');
const heads = parseInt(inputs[0]);
const legs = parseInt(inputs[1]);

let rabbits = (legs - heads * 2)/2
let chickens = (legs - (rabbits*4)) /2

console.log(chickens + " " + rabbits);
