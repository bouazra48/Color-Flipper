const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexaColor = "#";
    for (i = 0; i < 6; i++) {
        hexaColor += hex[getNumber()];
    }

    color.textContent = hexaColor;
    document.body.style.backgroundColor = hexaColor;
})

function getNumber() {
    return Math.floor(Math.random() * hex.length);
}