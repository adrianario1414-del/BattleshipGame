const playerBoard = document.getElementById("playerBoard");
const enemyBoard = document.getElementById("enemyBoard");
const statusText = document.getElementById("status");
const hitsText = document.getElementById("hits");
const shipsLeftText = document.getElementById("shipsLeft");
const restartBtn = document.getElementById("restartBtn");

let hits = 0;
let shipsLeft = 15;

function createBoards() {

    playerBoard.innerHTML = "";
    enemyBoard.innerHTML = "";

    hits = 0;
    shipsLeft = 15;

    hitsText.textContent = hits;
    shipsLeftText.textContent = shipsLeft;

    statusText.textContent = "Начни стрелять! ⚓";

    for (let i = 0; i < 100; i++) {

        // поле игрока
        const playerCell = document.createElement("div");
        playerCell.classList.add("cell");

        if (Math.random() < 0.15) {
            playerCell.classList.add("ship");
        }

        playerBoard.appendChild(playerCell);

        // поле врага
        const enemyCell = document.createElement("div");
        enemyCell.classList.add("cell");

        enemyCell.dataset.ship =
            Math.random() < 0.15 ? "true" : "false";

        enemyCell.addEventListener("click", () => {

            if (
                enemyCell.classList.contains("hit") ||
                enemyCell.classList.contains("miss")
            ) {
                return;
            }

            if (enemyCell.dataset.ship === "true") {

                enemyCell.classList.add("hit");

                hits++;
                shipsLeft--;

                hitsText.textContent = hits;
                shipsLeftText.textContent = shipsLeft;

                statusText.textContent = "💖 Попадание!";

                if (shipsLeft === 0) {
                    statusText.textContent =
                        "🏆 Победа! Все корабли уничтожены!";
                }

            } else {

                enemyCell.classList.add("miss");

                statusText.textContent = "🌊 Мимо";

            }

        });

        enemyBoard.appendChild(enemyCell);

    }

}

restartBtn.addEventListener("click", createBoards);

createBoards();
