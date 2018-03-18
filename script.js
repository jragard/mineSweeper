function handleEvent(event) {

    let widthInput = document.getElementById("width").value;
    let heightInput = document.getElementById("height").value;
    let mineInput = Number(document.getElementById("mines").value);

    let container_div = document.getElementById("container");
    container_div.innerHTML = "";
    container_div.style.width = widthInput * 52 + "px";
    container_div.style.height = heightInput * 52 + "px";

    // let mineCellIndex = Math.floor(Math.random() * (widthInput * heightInput));
    // let cellToReplace = document.getElementById(mineCellIndex);

   

    function rightClick(event) {
        let target = event.target;
        event.preventDefault();
        
        if (target.className === "cell") {
            target.className = "flag";
        } else if (target.className === "flag") {
            target.className = "cell";
        }
        return false;
    }

    function leftClick(event) {
        let target = event.target;
        target.className = "safeCells";

        let row = Math.floor(target.id / widthInput);
        let col = target.id % widthInput;

        target.dataset.columns = col;
        target.dataset.row = row;

        checkArray.push(boardArray[row - 1][col - 1]);
        checkArray.push(boardArray[row - 1][col]);
        checkArray.push(boardArray[row - 1][col + 1]);
        checkArray.push(boardArray[row][col + 1]);
        checkArray.push(boardArray[row + 1][col + 1]);
        checkArray.push(boardArray[row + 1][col]);
        checkArray.push(boardArray[row + 1][col - 1]);
        checkArray.push(boardArray[row][col - 1]);

            
        
        // console.log(checkArray);
        // boardArray[row][col]

        // console.log(boardArray[row][col])

        // console.log(row);
        // console.log(col);
    }



    generateCells(widthInput, heightInput, mineInput);


    function generateCells(widthInput, heightInput, mineInput) {

        

        function generateMines() {
            let mineCellIndex = Math.floor(Math.random() * (widthInput * heightInput));
            let cellToReplace = document.getElementById(mineCellIndex);
            mineArray.push(mineCellIndex);
            if (cellToReplace.className === "cell") {
                cellToReplace.className = "mines";
            } else if (cellToReplace.className === "mines") {
                nextCellToReplace = document.getElementsByClassName("cell");
                nextCellToReplace[0].className = "mines";
            }
        }

        for (let i = 0; i < heightInput; i++) {
            boardArray.push([]);

            for (let j = 0; j < widthInput; j++) {
                cellNum++;

                let cell = document.createElement("div");
                cell.className = "cell";
                cell.id = cellNum;

                let row = Math.floor(cellNum / widthInput);
                let col = cellNum % widthInput;
                

                

                boardArray[i].push(cellNum);

                cell.addEventListener("contextmenu", rightClick, false);
                cell.addEventListener("click", leftClick);

                container_div.appendChild(cell);

            }
        }

        for (let i = 0; i < mineInput; i++) {
            generateMines();
}

}










}

let boardArray = [];
let mineArray = [];
let checkArray = [];
let cellNum = -1;



let button = document.getElementById("startGame");
button.addEventListener("click", this);