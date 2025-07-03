// 226. Invert Binary Tree  
// https://leetcode.com/problems/invert-binary-tree/

/*
pseudo code:
  1. If the root is null, return null.
  2. Swap the left and right children of the root.
  3. Recursively invert the left and right children of the root.
  4. Return the root.
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
 * @return {TreeNode}
 */

//Recursive time: O(n) space: O(n)
function invertTree(root) {
    if (!root) return null
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};

//Iterative time: O(n) space: O(n)
function invertTreeIterative(root) {
    if (!root) return null
    let queue = [root]
    while (queue.length > 0) {
        let node = queue.shift()
        let temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return root
}

console.log(invertTreeIterative([4, 2, 7, 1, 3, 6, 9])) // [4, 7, 2, 9, 6, 3, 1]
console.log(invertTreeIterative([2, 1, 3])) // [2, 3, 1]
console.log(invertTreeIterative([])) // []
