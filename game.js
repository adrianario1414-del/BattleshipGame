const playerBoard = document.getElementById("playerBoard");

const SIZE = 10;

const ships = [4,3,3,2,2,2,1,1,1,1];

let board = [];

function createEmptyBoard(){

    board = [];

    for(let y = 0; y < SIZE; y++){

        let row = [];

        for(let x = 0; x < SIZE; x++){

            row.push(0);

        }

        board.push(row);

    }

}

function canPlaceShip(x, y, length, horizontal){

    for(let i = -1; i <= 1; i++){

        for(let j = -1; j <= length; j++){

            let nx;
            let ny;

            if(horizontal){

                nx = x + j;
                ny = y + i;

            }
            else{

                nx = x + i;
                ny = y + j;

            }

            if(
                nx >= 0 &&
                nx < SIZE &&
                ny >= 0 &&
                ny < SIZE
            ){

                if(board[ny][nx] === 1){

                    return false;

                }

            }

        }

    }

    return true;

}

function placeShip(length){

    while(true){

        let horizontal = Math.random() < 0.5;

        let x = Math.floor(Math.random() * SIZE);
        let y = Math.floor(Math.random() * SIZE);

        if(horizontal && x + length > SIZE){

            continue;

        }

        if(!horizontal && y + length > SIZE){

            continue;

        }

        if(!canPlaceShip(x, y, length, horizontal)){

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

        break;

    }

}

function generateShips(){

    createEmptyBoard();

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
