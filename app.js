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

    return { updateBoard, getBoard }
})();

function createPlayer(name, mark) {
    return {name, mark};
}

function gamePlay() {

    const takeTurn = function (row, col, player) {
        // Check that play location is on board
        if (row > 2 | col > 2){
            return 'Error'
        }
        boardOperation.updateBoard(row, col, player.mark);
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

console.log(game.takeTurn(0,1, player1));
console.log(boardOperation.getBoard())

