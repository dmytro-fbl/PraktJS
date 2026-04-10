let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum,
 eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let newText = text[12] + text[6] + text[18] + text[25];

const searchText = 'in';
const allPos = [];

console.log("1) " + newText);

newText.toLowerCase();

console.log("2) нижній регістр: " + newText);

let index = text.indexOf(searchText);

while (index !== -1) {
    allPos.push(index);
    index = text.indexOf(searchText, index+1);
}
console.log("3) " + allPos);

let split = text.split(" ");
console.log("4) " + split);
let reverseText = text.split('').reverse().join("");
console.log("5) " + reverseText);

function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log("6) " + ucFirst('some text'));
