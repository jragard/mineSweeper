function handleEvent(event) {

    let widthInput = document.getElementById("width").value;
    let heightInput = document.getElementById("height").value;
    let mineInput = Number(document.getElementById("mines").value);

    let flagCount = mineInput;

    let timer = 000;

    function timeIncrease() {
        setInterval(function(){
            timer++; }, 1000);
        }
    

    let container_div = document.getElementById("container");
    container_div.innerHTML = "";
    container_div.style.width = widthInput * 32 + "px";
    container_div.style.height = heightInput * 32 + "px";

    // let flagCount = document.getElementsByClassName("flag");

    let cellCount = document.getElementsByClassName("cell");

    let flagCountDest = document.getElementById("flagCount");
    flagCountDest.style.width = widthInput * 32 + "px";
    
    
    let flagText = document.createTextNode(flagCount);

    flagCountDest.appendChild(flagText);


    let destination = document.getElementById("winMessage");
    let loseText = document.createTextNode("You Lose");
    let winText = document.createTextNode("You Win");


   

    function rightClick(event) {
        let target = event.target;
        event.preventDefault();
        
        target.classList.toggle("flag");
        if (target.classList.contains("flag")) {
            flagCount--;
            flagCountDest.innerHTML = flagCount;
            // flagCountDest.appendChild(flagCount);
            console.log(flagCount);
        } else {
            flagCount++;
            flagCountDest.innerHTML = flagCount;
            // flagCountDest.appendChild(flagCount);
            console.log(flagCount);
        }
        return false;
    }

    function revealMines() {
        for (let i = 0; i < mineArray.length; i++) {
            let revealedMine = document.getElementById(mineArray[i]);
            if (revealedMine.className === "flag" && revealedMine.className === "mines") {
                revealedMine.className === "flag";
            } else {revealedMine.className = "revealedMines"};
        }
    }

    

    function leftClick(event) {
        
        

        checkArray = [];
        let target = event.target;

        for (i = 0; i < boardArray.length; i++) {

        
        if (target.className === "cell") {
        target.className = "safeCells";

        if (cellCount.length === 0) {
            revealMines();
            destination.appendChild(winText);
        }
        


       } if (target.className === "mines") {
           
           revealMines();
           
            
            destination.appendChild(loseText);
            
            
        }
    }
    
    

        let row = Math.floor(target.id / widthInput);
        let col = target.id % widthInput;

        target.dataset.columns = col;
        target.dataset.row = row;

        

        if (row !== 0 && col !== 0) {
            // above + left
            checkArray.push(boardArray[row - 1][col - 1]);
        }
        if (row !== 0) {
            // above
            checkArray.push(boardArray[row - 1][col]);
        }
        if (row !== 0 && col < widthInput - 1) {
            // above + right
            checkArray.push(boardArray[row - 1][col + 1]);
        }
        if (col < widthInput - 1) {
            // right
            checkArray.push(boardArray[row][col + 1]);
        }
        if (row < heightInput - 1 && col < widthInput - 1) {
            // below + right
            checkArray.push(boardArray[row + 1][col + 1]);
        }
        if (row < heightInput - 1) {
            // below
            checkArray.push(boardArray[row + 1][col]);
        }
        if (row < heightInput - 1 && col !== 0) {
            // below + left
            checkArray.push(boardArray[row + 1][col - 1]);
        }
        if (col !== 0) {
            // left
            checkArray.push(boardArray[row][col - 1]);
        }

        

        let mineNeighbors = checkArray.filter(function(val) {
            return mineArray.indexOf(val) != -1;
        });


        let number = mineNeighbors.length;
        
        target.dataset.number = number;  

        

        if (target.className === "safeCells") {

        target.innerHTML = number; }
        target.dataset.number = number;
        

       

        if (number === 0 && row !== 0 && col !== 0) {
            // above + left
            let upLeft = document.getElementById(boardArray[row - 1][col - 1]);
            if (target.className === "safeCells" && upLeft.className === "cell") {
            upLeft.click(); }
        }
        if (number === 0 && row !== 0) {
            // above
            let up = document.getElementById(boardArray[row - 1][col]);
            if (target.className === "safeCells" && up.className === "cell") {
                up.click(); }
        }
        if (number === 0 && row !== 0 && col < widthInput - 1) {
            // above + right
            let upRight = document.getElementById(boardArray[row - 1][col + 1]);
            if (target.className === "safeCells" && upRight.className === "cell") {
                upRight.click(); }
        }
        if (number === 0 && col < widthInput - 1) {
            // right
            let right = document.getElementById(boardArray[row][col + 1]);
            if (target.className === "safeCells" && right.className === "cell") {
                right.click(); }
        }
        if (number === 0 && row < heightInput - 1 && col < widthInput - 1) {
            let downRight = document.getElementById(boardArray[row + 1][col + 1]);
            // below + right
            if (target.className === "safeCells" && downRight.className === "cell") {
                downRight.click(); }
        }
        if (number === 0 && row < heightInput - 1) {
            // below
            let down = document.getElementById(boardArray[row + 1][col]);
            if (target.className === "safeCells" && down.className === "cell") {
                down.click(); }
        }
        if (number === 0 && row < heightInput - 1 && col !== 0) {
            // below + left
            let downLeft = document.getElementById(boardArray[row + 1][col - 1]);
            if (target.className === "safeCells" && downLeft.className === "cell") {
                downLeft.click(); }
        }
        if (number === 0 && col !== 0) {
            // left
            let left = document.getElementById(boardArray[row][col - 1]);
            if (target.className === "safeCells" && left.className === "cell") {
                left.click(); }
        }

        console.log(cellCount.length);
        
} 



    generateCells(widthInput, heightInput, mineInput);


    function generateCells(widthInput, heightInput, mineInput) {

        
        // flagCountDest.appendChild(timer);

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
        
            console.log(cellCount.length);
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