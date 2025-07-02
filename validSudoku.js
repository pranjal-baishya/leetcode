// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

/*
pseudo code:
  1. Create three maps to store the numbers in each row, column, and 3x3 sub-box.
  2. Iterate through the board and check if the number is already in the map.
    2.1 If it is, return false.
    2.2 If it is not, add the number to the map.
  3. If the board is valid, return true.
*/  

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const cols = new Map()
  const rows = new Map()
  const squares = new Map()

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = board[row][col]
      if (num === ".") continue

      if (rows.has(row) && rows.get(row).has(num)) return false
      rows.set(row, new Set([...(rows.get(row) || []), num]))

      if (cols.has(col) && cols.get(col).has(num)) return false
      cols.set(col, new Set([...(cols.get(col) || []), num]))

      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (squares.has(boxIndex) && squares.get(boxIndex).has(num)) return false
      squares.set(boxIndex, new Set([...(squares.get(boxIndex) || []), num]))
    }
  }

  return true
}

console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])) // true

console.log(isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])) // false
