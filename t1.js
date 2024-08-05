//Here we take input from the user and convert the string to lower case to avoid case sensitivity
const sentence = prompt("Enter a sentence");
console.log("The entered sentence is =>", sentence);
let s1 = sentence.toLowerCase();
//Here we convert the string to array so that traversal becomes easy
let s1Array = s1.split("").filter((char) => char.trim());
let c = 0;
let index = 0;
let foundLetters = [];
let values = [];
//Here we iterate over each element of array and put it in a new array if it dosent exist there (repetion condition checked)
//Also we find the unique letters of the string
s1Array.forEach((element) => {
  if (!foundLetters.includes(element)) {
    foundLetters[index] = element;
    index++;
    c++;
  }
});
//Here for the each letter found we  find theri number of occurence (repeatition) in the string using for each
foundLetters.forEach((letter) => {
  let count = 0;
  s1Array.forEach((Element) => {
    if (Element == letter) {
      count++;
    }
  });
  values.push(count);
});

//Here we print the number of unique letteres of the string and their total number of occurences
console.log(c);
console.log(values);
console.log(foundLetters);

//Here we print the above in kev-value pair form (BONUS TASK)
let n = 0;
foundLetters.forEach((element) => {
  console.log(`${element}:${values[n]}`);
  n++;
});
