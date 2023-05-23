# Lang: JavaScript
# Type: reverse

## Problem: 

Ben and Tom send messages to you describing the temperature in their respective countries.
Ben lives in the USA
Tom lives in the UK
Ben uses Fahrenheit
Tom uses Celsius

Ben and Tom will send you their inputs as one integer each b and t, separated by a space. There will be n such lines of inputs.
For each line, output the string "Higher" if Ben's temperature is higher than Tom's, and output the string "Lower" if Ben's temperature is lower than Tom's. If the temperatures are the same output the string "Same".

Conversion from C Celsius to F Fahrenheit follows the formula C x 9 / 5 + 32 = F
Input
First line: integer n for the number of inputs that will be received.
Next n lines: two integers b and t separated by a space.
Output
n lines: Strings indicating if the Fahrenheit temperature in the first value is "Higher", "Lower", or the "Same" as the Celsius temperature in the second value.
Constraints
0 < n < 100
-273 <= b, t <= 300
Example
Input
3
5 -14
5 -15
5 -16
Output
Lower
Same
Higher




## Solution: 

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = parseInt(inputs[0]);
    const t = parseInt(inputs[1]);

    if(b < (((t*9)/5)+32)) {
        console.log("Lower")
    } else if(b == (((t*9)/5)+32)) {
        console.log("Same")
    } else {
        console.log("Higher")
    }   
}
