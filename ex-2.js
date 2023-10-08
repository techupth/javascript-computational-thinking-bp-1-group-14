function countVowels(words) {
  // Start coding here
  let vowels= 'aAeEiIoOuU'
  let countvowel=0;
for(let i = 0 ; i <= words.length-1 ; i++){
if(words[i] === "a"|| words[i] === "A" ||words[i] === "e" || words[i] === "E" || words[i] === "i"|| words[i] === "I"|| words[i] === "o"|| words[i] === "O"|| words[i] === "u"|| words[i] === "U" ){
    countvowel++
  }
  }
  return countvowel
}

let test = countVowels("Hello World"); // Output: 3
let test2 = countVowels("TechUp"); // Output: 2

console.log(test)
console.log(test2)

