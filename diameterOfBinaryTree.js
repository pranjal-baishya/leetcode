// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

/*
pseudo code:
  1. If the root is null, return 0.
  2. Calculate the diameter of the left and right children of the root.
  3. Return the maximum of the diameter of the left and right children of the root.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Recursive time: O(n) space: O(n)
function diameterOfBinaryTree(root) {
  let result = 0
  function dfs(root) {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)
    result = Math.max(result, left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)
  return result
}

//Iterative time: O(n) space: O(n)
console.log(diameterOfBinaryTree([1, 2, 3, 4, 5])) // 3
console.log(diameterOfBinaryTree([1, 2])) // 1