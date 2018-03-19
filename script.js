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
        // for (i = 0; i < checkArray.length; i++) {

        // }

        checkArray = [];
        let target = event.target;
        target.className = "safeCells";

        let row = Math.floor(target.id / widthInput);
        let col = target.id % widthInput;

        target.dataset.columns = col;
        target.dataset.row = row;

        console.log(row);
        console.log(col);

        if (row === 0 && col === 0) {
            checkArray.push(boardArray[row][col + 1]);
            checkArray.push(boardArray[row + 1][col + 1]);
            checkArray.push(boardArray[row + 1][col]);
        } else if (row === 0 && col === widthInput - 1) {
            checkArray.push(boardArray[row][col - 1]);
            checkArray.push(boardArray[row + 1][col - 1]);
            checkArray.push(boardArray[row + 1][col]);
        } else if (row === heightInput - 1 && col === 0) {
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col + 1]);
            checkArray.push(boardArray[row][col + 1]);
        } else if (row === heightInput - 1 && col === widthInput - 1) {
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col - 1]);
            checkArray.push(boardArray[row][col - 1]);
        } else if (col === 0) {
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col + 1]);
            checkArray.push(boardArray[row][col + 1]);
            checkArray.push(boardArray[row + 1][col + 1]);
            checkArray.push(boardArray[row + 1][col]);
        } else if (row === 0) {
            checkArray.push(boardArray[row][col - 1]);
            checkArray.push(boardArray[row + 1][col - 1]);
            checkArray.push(boardArray[row + 1][col]);
            checkArray.push(boardArray[row + 1][col + 1]);
            checkArray.push(boardArray[row][col + 1]);
        } else if (row === heightInput - 1) {
            checkArray.push(boardArray[row][col - 1]);
            checkArray.push(boardArray[row - 1][col - 1]);
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col + 1]);
            checkArray.push(boardArray[row][col + 1]);
        } else if (col === widthInput - 1) {
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col - 1]);
            checkArray.push(boardArray[row][col - 1]);
            checkArray.push(boardArray[row + 1][col - 1]);
            checkArray.push(boardArray[row + 1][col]);
        } else {
            checkArray.push(boardArray[row - 1][col - 1]);
            checkArray.push(boardArray[row - 1][col]);
            checkArray.push(boardArray[row - 1][col + 1]);
            checkArray.push(boardArray[row][col + 1]);
            checkArray.push(boardArray[row + 1][col + 1]);
            checkArray.push(boardArray[row + 1][col]);
            checkArray.push(boardArray[row + 1][col - 1]);
            checkArray.push(boardArray[row][col - 1]);
        }

        

        let mineNeighbors = checkArray.filter(function(val) {
            return mineArray.indexOf(val) != -1;
        });

        let number = mineNeighbors.length;

        console.log(mineNeighbors);

        target.innerHTML = number;

        

            
        
        console.log(checkArray);
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
            
            if (cellToReplace.className === "cell") {
                cellToReplace.className = "mines";
                mineArray.push(mineCellIndex);
            } else {
                nextCellToReplace = document.getElementsByClassName("cell");
                let string = nextCellToReplace[0].id;
                nextCellToReplace[0].className = "mines";
                mineArray.push(parseInt(string));
                
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