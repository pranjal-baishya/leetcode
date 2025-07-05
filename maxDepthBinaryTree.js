// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*
pseudo code:
  1. If the root is null, return 0.
  2. Return 1 + the maximum depth of the left and right children of the root.
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
function maxDepth(root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

//Iterative time: O(n) space: O(n)
function maxDepthIterative(root) {
  if (!root) return 0
  let queue = [root]
  let depth = 0
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}

console.log(maxDepth([3, 9, 20, null, null, 15, 7])) // 3
console.log(maxDepth([1, null, 2])) // 2
console.log(maxDepthIterative([3, 9, 20, null, null, 15, 7])) // 3
console.log(maxDepthIterative([1, null, 2])) // 2
