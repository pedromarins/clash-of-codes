Lang: JavaScript
Type: shortest

Problem: 

Determine all packages that are out of date.
Given are the number of packages. Followed by a list of installed versions and a list of available versions. Both lists contain the same number of packages in the same order.

Note: The version is always three integers separated by dots.

Input
Line 1: An integer N for the number of packages.
Next N lines: The name of a package and the installed version separated by space.
Next N lines: The name of a package and the available version separated by space.

Output
Line 1: An integer K for the number of packages to update.
Next K lines: The names of the packages which are out of date.

Constraints
1<=N<=100
Package name is lowercase may contain numbers, multiple underscores and dashes. No spaces and special characters.
The version is always three integers x.y.z separated by dots.
0 <= x, y, z < 2^31

Example

Input
```4
pip 18.3.1
pytest 5.1.2
scipy 1.7.1
sympy 1.9.0
pip 21.2.4
pytest 6.2.4
scipy 1.7.1
sympy 1.9.0```

Output
```2
pip
pytest```

Solution: 

const N = parseInt(readline());
let package = {}
let count = 0
let itens = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const packageName = inputs[0];
    const installedVersion = inputs[1];
    package[packageName] = installedVersion
}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const packageName = inputs[0];
    const availableVersion = inputs[1];
    if(package[packageName] < availableVersion) {
        count++
        itens.push(packageName)
    }
}

console.log(count);
itens.forEach((e) => {
    console.log(e);
})
