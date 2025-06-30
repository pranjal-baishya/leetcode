/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map();
  
  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      const num = board[row][col];
      if(num === '.') continue;

      // Check row
      if(rows.has(row) && rows.get(row).has(num)) return false;
      rows.set(row, new Set([...(rows.get(row) || []), num]));

      // Check column
      if(cols.has(col) && cols.get(col).has(num)) return false;
      cols.set(col, new Set([...(cols.get(col) || []), num]));

      // Check 3x3 sub-box
      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if(squares.has(boxIndex) && squares.get(boxIndex).has(num)) return false;
      squares.set(boxIndex, new Set([...(squares.get(boxIndex) || []), num]));
    }
  }
  
  return true;
};