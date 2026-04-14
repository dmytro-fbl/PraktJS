const div = document.getElementById('paragraphs');
let ps = div.querySelectorAll('p');

const arrTask1 = [];
for (let i = 0; i < ps.length; i++) {
    let count = ps[i].innerText.length;
    arrTask1.push(count);
}
console.log(arrTask1);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
console.log(arr);
const min = Math.min(...arr);
const max = Math.max(...arr);
let countEven = 0;
let countOdd = 0;
let twoDigit = 0;
let positive = 0;
let negative = 0;
console.log(min);
console.log(max);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
        countEven++;
    }else{
        countOdd++;
    }
    if (Math.abs(arr[i]).toString().length === 2){
        twoDigit++;
    }
    if(arr[i] >= 0){
        positive++;
    }
    else {
        negative++;
    }
}



console.log("Парні: " + countEven + " Непарні: " + countOdd);
console.log("Кількість що містять 2 цифри: " + twoDigit);
console.log("Додатні: " + positive + " Від'ємні: " + negative);
console.log(arr.sort((a, b) => a - b));
console.log(arr.reverse());
