// let widthInput = 9;
// let heightInput = 9;
let container_div = document.getElementById("container");

function board(target_div) {
    let cell = document.createElement("div");
    cell.className = "cell";

    target_div.appendChild(cell);

    this.generateCells = function (widthInput, heightInput) {
        for (let row = 0; row < widthInput; row++) {
            for (let col = 0; col < heightInput; col++) {
                let newCells = document.createElement("div");
                newCells.className = "newCells";
                target_div.appendChild(newCells);
            }
        }
    }

        this.handleEvent = function () {
        let widthInput = document.getElementById("width").value;
        let heightInput = document.getElementById("height").value;
       
        container_div.innerHTML = "";
        container_div.style.width = widthInput * 52 + "px";
        container_div.style.height = heightInput * 52 + "px";
        this.generateCells(widthInput, heightInput);
}
    
    let button = document.getElementById("startGame");
    button.addEventListener("click", this);
}


for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        var object = new board(container_div);
    }
}