Lang: JavaScript
Type: shortest

Problem: 

It's the middle of winter, and you've got the winter blues real bad. What you need is a puppy! And fast! There is no time to think through the extra responsibilities you're about to take on. Because all the roads in your town run north-south and east-west, you can calculate the distances between locations by adding together the difference in x coordinates and the difference in y coordinates (manhattan distance).

Given the location of your house and a list of pet store locations, which store is the nearest?

  Input
Line 1: 2 space separated integers hx and hy for the coordinates of your house.
Line 2: n, the number of pet stores nearby.
Next n lines: 2 space separated integers px and py for the coordinates of each pet store.

Output
2 space separated integers, the 1-based index of which pet store is nearest to your house, along with the distance to it.

If multiple pet stores are the same distance, return the store with the lowest index.

Constraints
1 ≤ n ≤ 100
-1000 ≤ hx,hy,px,py ≤ 1000

Example

Input
10 10
1
12 11

Output
1 3


Solution: 

Not working when input is negative!

var inputs = readline().split(' ').map( Number );
const hx = inputs[0];
const hy = inputs[1];
const n = parseInt(readline());
let distance = 0
let element = 1
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ').map( Number );
    const px = inputs[0];
    const py = inputs[1];
    const far = (px-hx)+(py-hy)
    if(i==0) {
        distance = far
        element = 1
    } else if (far<distance) {
            distance = far
            element = n+1
    }
}
console.log(element + " " + distance)

