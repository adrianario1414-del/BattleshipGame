const playerBoard = document.getElementById("playerBoard");
const enemyBoard = document.getElementById("enemyBoard");
const SIZE = 10;

const ships = [4,3,3,2,2,2,1,1,1,1];

let board = [];

function createBoard(){

    board = [];

    for(let y = 0; y < SIZE; y++){

        let row = [];

        for(let x = 0; x < SIZE; x++){

            row.push(0);

        }

        board.push(row);

    }

}

function canPlace(x, y, length, horizontal){

    for(let i = 0; i < length; i++){

        let cx = horizontal ? x + i : x;
        let cy = horizontal ? y : y + i;

        if(cx >= SIZE || cy >= SIZE){

            return false;

        }

        for(let yy = cy - 1; yy <= cy + 1; yy++){

            for(let xx = cx - 1; xx <= cx + 1; xx++){

                if(
                    xx >= 0 &&
                    xx < SIZE &&
                    yy >= 0 &&
                    yy < SIZE
                ){

                    if(board[yy][xx] === 1){

                        return false;

                    }

                }

            }

        }

    }

    return true;

}

function placeShip(length){

    let placed = false;

    while(!placed){

        let horizontal = Math.random() < 0.5;

        let x = Math.floor(Math.random() * SIZE);
        let y = Math.floor(Math.random() * SIZE);

        if(!canPlace(x, y, length, horizontal)){

            continue;

        }

        for(let i = 0; i < length; i++){

            if(horizontal){

                board[y][x + i] = 1;

            }
            else{

                board[y + i][x] = 1;

            }

        }

        placed = true;

    }

}

function generateShips(){

    createBoard();

    ships.forEach(ship => {

        placeShip(ship);

    });

}

function drawBoard(){

    playerBoard.innerHTML = "";

    for(let y = 0; y < SIZE; y++){

        for(let x = 0; x < SIZE; x++){

            const cell = document.createElement("div");

            cell.classList.add("cell");

            if(board[y][x] === 1){

                cell.classList.add("ship");

            }

            playerBoard.appendChild(cell);

        }

    }

}

generateShips();

drawBoard();

document
.getElementById("restartBtn")
.addEventListener("click", () => {

    generateShips();

    drawBoard();

});
