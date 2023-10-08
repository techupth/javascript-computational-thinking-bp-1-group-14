const getLetterFrequency = (words) => {
  // Start coding here
const obj = {};
for(let i = 0; i < words.length ; i++) {
  if(words[i].toLowerCase() in obj) {
  obj [words[i].toLowerCase()] = obj [words[i].toLowerCase()] + 1;
} else {
  obj [words[i].toLowerCase()] = 1;
}
}
return obj;
}
const str = "Techupth";
let Exercise5= getLetterFrequency(str);
console.log(Exercise5)
/* Output:
{
  t: 2,
  e: 1,
  c: 1,
    h: 2,
    u: 1,
    p: 1
}
*/
