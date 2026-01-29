import { makeMove } from "../move-maker";

let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];

test("given a valid move, return true", () => {
    expect(makeMove(board, '1,2', 'X')).toEqual(true)
})

test("given an move not includes ','; return false", () => {
    expect(makeMove(board, '12', 'X')).toEqual(false)
})