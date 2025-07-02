// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

/*
pseudo code:
  1. Initialize two pointers, prev and curr.
  2. Iterate through the linked list.
  3. Reverse the direction of the next pointer for each node.
  4. Return the new head of the reversed list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

console.log(reverseList([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(reverseList([1, 2])) // [2, 1]
console.log(reverseList([])) // []
