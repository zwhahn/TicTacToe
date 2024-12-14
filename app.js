const boardOperation = (function () {
    let board = [[null,null,null],
                [null,null,null],
                [null,null,null]];

    const updateBoard = function (row,col, mark){
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

    return { updateBoard, getBoard, checkForWinner }
})();

function createPlayer(name, mark) {
    return {name, mark};
}

function gamePlay() {
    const takeTurn = function (row, col, player) {
        // Check that play location is on board
        if (row > 2 | col > 2){
            return 'Outside of board'
        }
        boardOperation.updateBoard(row, col, player.mark);
        return boardOperation.checkForWinner();
    }

    return { takeTurn };
};

// console.log(boardOperation.updateBoard(0,0,'x'));
// console.log(boardOperation.updateBoard(1,0,'x'));
// console.log(newGame(2,0,'x'));
// console.log(newGame(0,2,'x'));

player1 = createPlayer('player1', 'x');
player2 = createPlayer('player2', 'o');
console.log(createPlayer(player1));
console.log(createPlayer(player2));

game = gamePlay();

console.log(game.takeTurn(0,0, player2));
console.log(game.takeTurn(1,0, player2));
console.log(game.takeTurn(2,0, player2));
console.log(boardOperation.getBoard())

