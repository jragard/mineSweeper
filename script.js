let container_div = document.getElementById("container");
let boardArray = [];
let cellArray = [];

function board(target_div) {

    this.generateCells = function (widthInput, heightInput, mineInput) {

        let boardArray = [];
        
        for (let row = 0; row < widthInput; row++) {
            
            for (let col = 0; col < heightInput; col++) {
                this.cell = document.createElement("div");
                this.cell.className = "cell";
                this.cell.style.backgroundColor = "gray";
                this.cell.addEventListener("contextmenu", this.rightClick, false);
                this.cell.addEventListener("click", this.leftClick);
                target_div.appendChild(this.cell);
            }
        }
            // let cellArray = [];
            // let boardArray = [];
            // let mineArray = [];
            
            // for (let mine = 0; mine < mineInput; mine++) {
            //     mineArray.push("mines" + mine)
            // }

            // for (let i = 0; i < (widthInput * heightInput); i++) {
            //     cellArray
            // }

            // for (let i = 0; i < (widthInput * heightInput); i++) {
            //     boardArray.push("cell");
            // }

            // for (let mine = 0; mine <= mineInput; mine++) {
            //     boardArray.splice(Math.floor(Math.random() * (widthInput * heightInput)), 1, "mines");
            // }     

            // for (let row = 0; row < boardArray.length; row++) {
            //     let cellArray = document.getElementsByClassName("cell");
            // }

                
            
            
            
            
            
            
                // now cellsArray is an array of ["cells", "cells", "cells", "cells", "cells", "cells", "cells", "cells", "cells",]
                // maybe i can compare cellsArray with boardArray?  (which contains the correct classes I want for each of the cells.)  Or do I 
                // even need cellsArray in the first place?  One thing is certain, I will need a nested array (one array for each row), so that I can map out cell
                // positions to figure out where bombs are, etc.

                // Also I may need to move these functions below around a little bit 

            

        
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
        if (target.style.backgroundColor === "red") {
        target.style.backgroundColor = "gray";
       } else if (target.style.backgroundColor === "gray") {
            target.style.backgroundColor = "red";
       }
        return false;
    }

    this.leftClick = function (event) {
        let target = event.target;
        console.log(target.className);
        target.className = "safeCells";
        target.style.backgroundColor = "white";

        let widthInput = document.getElementById("width").value;
        let heightInput = document.getElementById("height").value;
        let mineInput = Number(document.getElementById("mines").value);
        
        for (let i = 0; i < (widthInput * heightInput); i++) {
            boardArray.push("cell");
        }

        for (let mine = 0; mine <= mineInput; mine++) {
            boardArray.splice(Math.floor(Math.random() * (widthInput * heightInput)), 1, "mines");
        }     

        for (let row = 0; row < boardArray.length; row++) {
            let cellArray = document.getElementsByClassName("cell");
        }
    }

    let button = document.getElementById("startGame");
    button.addEventListener("click", this);

}

var object = new board(container_div);


// Math.random() * mineInput