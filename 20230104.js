Lang: JavaScript
Type: fastest

Problem: 

Our reactor is equipped with four temperature sensors. It is common for one or more sensors to fail between two maintenance and refueling outages.

It was determined by engineering that the second maximum value is the most representative and envelope value to protect the reactor. You need to code an algorithm that returns the second maximum so the control and protection system of the reactor become more fault tolerant.

Input
line 1 : N the number of measurement point
line N: A list of four integers corresponding to sensor measurements in degree Celsius.

Output
Line N : for each line given as input return the second maximum value.

Constraints
1 ≤ N ≤ 100
-100 < w,x,y,z < 500

Example
Input
3
103 109 111 108
111 109 105 113
113 104 107 109

Output
109
111
109




Solution: 

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ').map( Number ).sort(function (a, b) {  return a - b;  });
    console.log(inputs[2])
}
