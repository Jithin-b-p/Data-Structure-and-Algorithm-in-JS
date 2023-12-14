"use strict";

// var solveNQueens = function (n) {
//   const res = new Array();
//   const board = [];
//   const boardRow = Array.from({ length: n }).fill(".");

//   for (let i = 0; i < n; i++) {
//     board[i] = [...boardRow];
//   }
//   console.log(res);

//   solve(0, board, [], board.length);
//   console.log(res);
// };

// const isSafe = function (board, row, col, n) {
//   let dupRow = row,
//     dupCol = col;
//   while (row >= 0 && col >= 0) {
//     if (board[row][col] === "Q") {
//       return false;
//     }
//     row--;
//     col--;
//   }

//   (row = dupRow), (col = dupCol);
//   while (col >= 0) {
//     if (board[row][col] === "Q") {
//       return false;
//     }
//     col--;
//   }

//   (row = dupRow), (col = dupCol);
//   while (row < n && col >= 0) {
//     if (board[row][col] === "Q") {
//       return false;
//     }
//     row++;
//     col--;
//   }

//   return true;
// };

// const solve = function (col, board, res, n) {
//   console.log(res);
//   console.log(n);
//   if (col === n) {
//     return construct(board);
//   }

//   for (let row = 0; row < n; row++) {
//     if (isSafe(board, row, col, n)) {
//       board[row][col] = "Q";
//       solve(col + 1, board, n);
//       board[row][col] = ".";
//     }
//   }
// };

// const construct = function (board, res) {
//   let n = board.length;
//   const ans = [];
//   for (let i = 0; i < n; i++) {
//     let boardRow = "";
//     for (let j = 0; j < n; j++) {
//       boardRow = boardRow + board[i][j];
//     }
//     ans.push(boardRow);
//   }
//   // res.push(ans);
//   console.log(ans);
// };

// solveNQueens(5);

const arr = new Array(3).fill(new Array(4).fill("."));

console.log(arr);
console.log(arr[0]);
