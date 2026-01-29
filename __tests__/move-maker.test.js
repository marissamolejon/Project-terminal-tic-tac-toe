import { makeMove } from "../move-maker";

test("given a valid move, return true", () => {
    let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    expect(makeMove(board, '1,2', 'X')).toEqual(true)
})