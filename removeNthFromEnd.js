// 19. Remove Nth Node From End of List (Medium)
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/*
pseudo code:
  1. Use two pointers, slow and fast.
  2. Move fast pointer n steps ahead.
  3. Move both pointers one step at a time until fast reaches the end.
  4. Remove the node after slow pointer.
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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let slow = head
  let fast = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (!fast) {
    return head.next
  }
  while (fast?.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)) // [1,2,3,5]
console.log(removeNthFromEnd([1], 1)) // []
console.log(removeNthFromEnd([1, 2], 1)) // [1]
