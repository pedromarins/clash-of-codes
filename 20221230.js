Lang: JavaScript
Type: shortest


The elevator floor display had a problem and displayed its log up/down of the day with brackets ( for go up one floor and ) for go down one floor. The elevator starts on floor 0 and there is no limit to the number of floors in both up (positive) and down (negative) directions

Input
A string log from the elevator display log

Output
An integer floor telling the floor where we are

Constraints
4 ≤ length of log ≤ 5600

Example
Input
(())

Output
0




Solution: 

const l = readline().split('')
let c = 0
l.forEach((e)=>{if(e=='('){c++}else{c--}});console.log(c);
