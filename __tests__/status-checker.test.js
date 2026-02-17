import { checkRow, checkColumn, checkDiagonal, isGameOver } from "../status-checker";

test("checkRow returns true if player made a move in all 3 squares in the row", () => {
  const board = [
            ['X', 'X', 'X'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
  expect(checkRow(board, 'X', 0)).toBe(true);
});

test("checkRow returns false if player didnt make a move in all 3 squares in the row", () => {
  const board = [
            ['X', 'X', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
  expect(checkRow(board, 'X', 0)).toBe(false);
});

test("checkColumn returns true if the player has made a move in all 3 squares in the column", () => {
  const board = [
            ['X', '_', 'X'],
            ['_', '_', 'X'],
            ['O', 'O', 'X']
        ];
  expect(checkColumn(board, 'X', 2)).toBe(true);
});

test("checkColumn returns false if the player hasn't made a move in all 3 squares in the column", () => {
  const board = [
            ['X', '_', 'X'],
            ['_', '_', 'O'],
            ['O', 'O', 'X']
        ];
  expect(checkColumn(board, 'X', 2)).toBe(false);
});

test("checkDiagonal returns true if the player has made a move in 3 diagonal squares", () => {
  const board = [
            ['X', '_', 'X'],
            ['_', 'X', 'O'],
            ['O', 'O', 'X']
        ];
  expect(checkDiagonal(board, 'X')).toBe(true);
});

test("checkDiagonal returns false if the player has not made a move in 3 diagonal squares", () => {
  const board = [
            ['X', '_', 'X'],
            ['_', '_', 'O'],
            ['O', 'O', 'X']
        ];
  expect(checkDiagonal(board, 'X')).toBe(false);
});

test("isGameOver returns true when 1 player wins or it's a tie", () => {
  const board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
  expect(isGameOver(board)).toBe(true);
});

test("isGameOver returns false when none player winning yet", () => {
  const board = [
            ['X', '_', '_'],
            ['_', '_', '_'],
            ['O', 'O', 'X']
        ];
  expect(isGameOver(board)).toBe(false);
});

test("isGameOver returns false when board is empty", () => {
  const board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
  expect(isGameOver(board)).toBe(false);
});