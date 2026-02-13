import { checkRow } from "../status-checker";

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
