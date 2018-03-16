let container_div = document.getElementById("container");
let boardArray = [];
let cellNum = 0;
let mineCellIndex;

function board(target_div) {

    this.generateCells = function (widthInput, heightInput, mineInput) {

        for (let i = 0; i < heightInput; i++) {
            boardArray.push([]);
            for (let j = 0; j < widthInput; j++) {
                cellNum++;
                boardArray[i].push(cellNum);
                this.cell = document.createElement("div");
                this.cell.className = "cell";
                this.cell.id = cellNum;
                this.cell.addEventListener("contextmenu", this.rightClick, false);
                this.cell.addEventListener("click", this.leftClick);
                target_div.appendChild(this.cell);
                
            }
        }
        
        for (let mine = 0; mine < mineInput; mine++) {
            let mineCellIndex = Math.floor(Math.random() * (widthInput * heightInput) + 1);
            let cellToReplace = document.getElementById(mineCellIndex);
            if (cellToReplace.className === "cell") {
                cellToReplace.className = "mines";
            } else if (cellToReplace.className === "mines") {
                let nextCellToReplace = document.getElementsByClassName("cell");
                nextCellToReplace[0].className = "mines";
            }
            
        }
    }

    
    this.handleEvent = function (event) {
        let widthInput = document.getElementById("width").value;
        let heightInput = document.getElementById("height").value;
        let mineInput = Number(document.getElementById("mines").value);
        container_div.innerHTML = "";
        container_div.style.width = widthInput * 52 + "px";
        container_div.style.height = heightInput * 52 + "px";
        this.generateCells(widthInput, heightInput, mineInput);
    }

    
    this.rightClick = function (event) {
        let target = event.target;
        event.preventDefault();
        if (target.className === "cell") {
            target.className = "flag";
        
       } else if (target.className === "flag") {
            target.className = "cell";
       }
        return false;
        console.log(target.style.backgroundColor);
    }

    this.leftClick = function (event) {
        let target = event.target;
        console.log(target.className);
        target.className = "safeCells";
        
        let widthInput = document.getElementById("width").value;
        let heightInput = document.getElementById("height").value;
        let mineInput = Number(document.getElementById("mines").value);
     }

    let button = document.getElementById("startGame");
    button.addEventListener("click", this);

}

var object = new board(container_div);


