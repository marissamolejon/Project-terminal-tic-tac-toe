import { checkRow, checkColumn } from "../status-checker";

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
  expect(checkRow(board, 'X', 2)).toBe(false);
});

test("checkColumn returns false if the player doesn't made a move in all 3 squares in the column", () => {
  const board = [
            ['X', '_', 'X'],
            ['_', '_', 'O'],
            ['O', 'O', 'X']
        ];
  expect(checkRow(board, 'X', 2)).toBe(false);
});