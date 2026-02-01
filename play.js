async function playGame() {
    let moveNumber = 0;

    const board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    printBoard(board);

    while (!isGameOver(board)) {
        let player = moveNumber % 2 === 0 ? 'X' : 'O';
        let move;

        do {
            move = await getMove(player);
        } while (!makeMove(board, move, player));

        printBoard(board);
        moveNumber++;
    }

    console.log("Game over!");
}
