/*Let rows = m, cols = n.

1. Initialize low = 0, high = m * n - 1.

2. While low <= high:

 a. Compute mid = Math.floor((low + high) / 2)

 b. Convert 1D index mid to 2D:

    row = Math.floor(mid / cols)

    col = mid % cols

 c. Compare matrix[row][col] to target:

    If equal → return true

    If smaller → move low = mid + 1

    If larger → move high = mid - 1

3.Return false if not found.

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false

  let rows = matrix.length,
    cols = matrix[0].length

  let l = 0,
    r = rows * cols - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)

    let row = Math.floor(mid / cols)
    let column = mid % cols
    let midValue = matrix[row][column]

    if (midValue === target) return true
    else if (midValue > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
) // true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
) // false
