const divs = document.querySelectorAll(".table");

for (let i = 0; i < divs.length; i++) {
    const tds = divs[i].querySelectorAll("td");
    for (let j = 0; j < tds.length; j++) {
        if (j % 2 === 1){
            tds[j].classList.add("selected");
        }
    }
}