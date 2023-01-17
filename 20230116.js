Lang: JavaScript
Type: fastest

Problem: 

Encrypt a message, m, given an encryption key, k. The original message was encrypted using Domino encryption, which goes through each letter k_i in k, and replaces all occurrences of k_i in m with k_i+1. The last letter of k is replaced by the first letter of k.

k has no duplicate letters.
Not every letter of m is necessarily in k.
Not every letter of k is necessarily in m.

Uppercase and lowercase letters are not the same.

Example:

m = Hello World
k = HeloWrd

Using k, the encryption would use the following conversion:

H -> e
e -> l
o -> W
W -> r
r -> d
d -> H

The answer should be: elooW rWdoH ( because using k, m = Hello World would be encrypted to elooW rWdoH )
Input
Line 1: Plain text message, m
Line 2: Encryption key, k

Output
Line 1: Encrypted message

Constraints
m is no longer than 1000 characters
k only contains uppercase and lowercase alphabetic characters
k does not contain any duplicates (and is therefore no longer than 52 characters i.e. 26 uppercase + 26 lowercase characters)

Example
Input
Hello World
HeloWrd

Output
elooW rWdoH



Solution: 

const m = readline();
const k = readline();

let encrypt = k.split('')

let dicionary = {}

encrypt.forEach( (e, i) => {
    if (i+1 == encrypt.length) {
        dicionary[e] = encrypt[0]
    } else {
        dicionary[e] = encrypt[i+1]
    }
})

let original = m.split('')

let newword = '' 

original.forEach( (e) => {
    if(e == ' ') {
        newword += ' '
    } else if (e in dicionary) {
        newword += dicionary[e]
    } else {
        newword += e
    }    
})

console.log(newword);


