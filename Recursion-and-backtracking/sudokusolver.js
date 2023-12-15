"use strict";

var solveSudoku = function (board) {
  solveSudokuHelper(board);
};

const solveSudokuHelper = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let c = 49; c <= 57; c++) {
          const ch = String.fromCharCode(c);
          if (isValid(board, i, j, ch)) {
            board[i][j] = ch;

            if (solveSudokuHelper(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }

  return true;
};

const isValid = function (board, row, col, ch) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === ch) return false;
    if (board[row][i] === ch) return false;

    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === ch
    )
      return false;
  }

  return true;
};