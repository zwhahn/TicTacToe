function Gameboard() {
    let board = [[null,null,null],
                [null,null,null],
                [null,null,null]];

    const boardContainer = document.querySelector(".board-container");

    const boardLayout = document.createElement("div");
    boardLayout.classList.add("board-layout");
    boardContainer.appendChild(boardLayout);
    
    for (let i = 0; i <= 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        boardLayout.appendChild(square);
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

    return { addMark, getBoard, checkForWinner }
};

function square(){
    let mark = 0;

    const addMark = function(player) {
        mark = player;
    }

    const getMark = function() {
        return mark;
    }

    return { addMark, getMark };
}

function createPlayer(name, mark) {
    return {name, mark};
}

function gamePlay(playerOneName = "Player One", playerTwoName = "Player Two") {

    const board = Gameboard();

    players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0];
    
    const changeActivePlayerTurn = () => activePlayer = activePlayer === players[0] ? players[1] : players[0];

    const getActivePlayer = () => activePlayer;

    const takeTurn = function (row, col) {
        
        console.log("current turn: " + getActivePlayer().name);

        board.addMark(row, col, getActivePlayer().token)

        board.checkForWinner();

        changeActivePlayerTurn();
    }



    return { takeTurn, changeActivePlayerTurn };
};

const game = gamePlay()

