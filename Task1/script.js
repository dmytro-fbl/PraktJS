const body = document.querySelector('body');
const table = document.getElementById('table-chess');

body.style.fontFamily = 'Arial';

let tds = table.querySelectorAll('td');
for (let i = 0; i < tds.length; i++) {
    if(i % 2 === 0){
        tds[i].classList.add("selected");
    }
}