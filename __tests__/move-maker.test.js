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

test("given an move with the 1st digit not from 1 to 3; return false", () => {
    expect(makeMove(board, '10,2', 'X')).toEqual(false)
})

test("given an move with the 2nd digit not from 1; return false", () => {
    expect(makeMove(board, '1,5', 'X')).toEqual(false)
})

test("given an move to an occupied position; return false", () => {
    expect(makeMove(board, '1,1', 'X')).toEqual(false)
})