const playerBoard = document.getElementById("playerBoard");
const enemyBoard = document.getElementById("enemyBoard");

for(let i=0;i<100;i++){

    const playerCell = document.createElement("div");
    playerCell.classList.add("cell");

    if(Math.random()<0.15){
        playerCell.classList.add("ship");
    }

    playerBoard.appendChild(playerCell);

    const enemyCell = document.createElement("div");
    enemyCell.classList.add("cell");

    enemyBoard.appendChild(enemyCell);
}
