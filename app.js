function Gameboard() {
    const rows = 3;
    const cols = 3;
    let board = [];

    for (i=0; i < rows; i++) {
        board[i] = [];
        for (j=0; j<cols; j++)
            board[i].push(null);
    }

    
    const addMark = function (row,col, mark){
        // Check that play location is on board
        if (row > 2 | col > 2){
            return 'Outside of board'
        }
        
        board[row][col] = mark;
        return board;
    }
    
    const getBoard = function () {
        return board;
    }
    
    const checkForWinner = function () {
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            // Check rows
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0]; // Return the winner ('X' or 'O')
            }
            // Check columns
            if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i]; // Return the winner ('X' or 'O')
            }
        }
        
        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0]; // Return the winner ('X' or 'O')
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2]; // Return the winner ('X' or 'O')
        }
        
        // No winner found
        return false;
    }

    // UI ----------------------------------
    const boardContainer = document.querySelector(".board-container");

    const boardLayout = document.createElement("div");
    boardLayout.classList.add("board-layout");
    boardContainer.appendChild(boardLayout);

    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        boardLayout.appendChild(square);

        // Calculate row and column info
        const row = Math.floor(i / cols);
        const col = i % cols;

        square.addEventListener("click", () => {
            game.takeTurn(row, col);
            square.textContent = `${game.getActivePlayer().mark}`
        });
    }
    // -------------------------------------

    return { addMark, getBoard, checkForWinner }
};

// function cell(){
    //     let mark = null;
    
    //     const addMark = function(playerMark) {
        //         mark = playerMark;
        //     }

        //     const getMark = function() {
            //         return mark;
            //     }
            
            //     return { addMark, getMark };
            // }
            
            function createPlayer(name, mark) {
                return {name, mark};
            }
            
function gamePlay(playerOneName = "Player One", playerTwoName = "Player Two") {
    
    const board = Gameboard();
    
    players = [
        {
            name: playerOneName,
            mark: 'x'
        },
        {
            name: playerTwoName,
            mark: 'o'
        }
    ];

    let activePlayer = players[0];
    
    const changeActivePlayerTurn = () => activePlayer = activePlayer === players[0] ? players[1] : players[0];
    
    const getActivePlayer = () => activePlayer;
    
    const takeTurn = function (row, col) {
        
        console.log("current turn: " + getActivePlayer().name);
        
        // Ensure two players can't go in the same spot
        if (board.getBoard()[row][col] != null){
            console.log(board.getBoard())
            console.log("Spot Taken!")
            return
        }
        
        board.addMark(row, col, getActivePlayer().mark)
        
        console.log(board.getBoard());
        
        // Check for winner
        winner = board.checkForWinner();
        console.log(winner)
        if (winner == getActivePlayer().mark) {
            console.log("winner is:" + getActivePlayer().name);
            
        }
        
        changeActivePlayerTurn();
    }
    
    
    
    return { takeTurn, getActivePlayer };
};

const game = gamePlay()