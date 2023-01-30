Lang: JavaScript
Type: reverse

Problem: 

For Buzz Lightyear to defeat Zurg, the toys need to spell the keyword to infinity and beyond using Mr. Spell. To do so, some of them are arranged in a queue of n toys and ready to spell the keyword.
The rules are:
1. The first toy in the queue will spell the first character of the keyword, "t", if this character is part of his name, regardless of the case (case insensitive).
2. If the character "t" is not found in the toy's name, we continue to the next toy in the queue, etc., until the character is found.
3. Once "t" is finally spelled by a toy, we restart from the beginning of the queue to spell the "o", then the " ", then "i","n","f", "i", ... until "d" the last character of the keyword.
4. Whitespaces are treated just like any other character of the keyword.
5. A toy within the queue can be used only once.

If the keyword to infinity and beyond can be spelled, given the toys' queue and following the above rules, then print the used toys, one per line and in the order they have in the queue ;
Otherwise, print Red alert!!! before it is too late !
Input
Line 1: An integer n for the number of toys in the queue.
Next n lines: The name of each toy in the queue (string that can contain letters, whitespaces, digits and even punctuations).
Output
The name of each toy that spells a character of the keyword (one per line, in the same order of use) if the keyword is completely spelled. Red alert!!! otherwise.
Constraints
Example
Input
33
Barrel of Monkeys
Bo Peep
Billy
Buzz Lightyear
Dolly
Duckie
Etch A Sketch
Green Army Men
Hamm
Hockey Puck
Lenny
Little Red Car
Magic 8-Ball
Mike
Mr. Potato Head
Mr. Shark
Mr. Spell
RC
Rex
Robot
Rock-a-Stack
Rocky Gibraltar
Roly Poly Clown
See n Say
Slinky Dog
Snake
Teddy
Tikes
Toy Train
Troikas
Troll
Woody
Goat and Gruff
Output
Buzz Lightyear
Barrel of Monkeys
Bo Peep
Billy
Green Army Men
Goat and Gruff
Duckie
Lenny
Little Red Car
Etch A Sketch
Dolly
Hockey Puck
Hamm
Roly Poly Clown
Mr. Potato Head
Magic 8-Ball
Robot
Mike
Rocky Gibraltar
Rock-a-Stack
See n Say
Slinky Dog




Solution: 

const phrase = 'to infinite and beyond'.split('')
let toyList = []

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const toy = readline()
    toyList.push(toy)
}

phrase.forEach( (e) => {
    for (let i = 0; i < toyList.length; i++) {
        if(toyList[i].split('').includes(e)) {
            console.log(toyList[i])
            toyList = toyList.splice(i,1)
            break;
        }
    }
})
