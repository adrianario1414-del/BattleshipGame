const playerBoard = document.getElementById("playerBoard");
const enemyBoard = document.getElementById("enemyBoard");
const statusText = document.getElementById("status");

// создаем поля
for(let i = 0; i < 100; i++){

    // поле игрока
    const playerCell = document.createElement("div");
    playerCell.classList.add("cell");

    // случайные корабли игрока
    if(Math.random() < 0.15){
        playerCell.classList.add("ship");
    }

    playerBoard.appendChild(playerCell);

    // поле противника
    const enemyCell = document.createElement("div");
    enemyCell.classList.add("cell");

    enemyCell.addEventListener("click", ()=>{

        // если уже стреляли - ничего не делать
        if(enemyCell.classList.contains("hit") ||
           enemyCell.classList.contains("miss")){
            return;
        }

        // случайно определяем попадание
        if(Math.random() < 0.15){
            enemyCell.classList.add("hit");
            statusText.textContent = "💥 Попадание!";
        }
        else{
            enemyCell.classList.add("miss");
            statusText.textContent = "🌊 Мимо!";
        }

    });

    enemyBoard.appendChild(enemyCell);
}
