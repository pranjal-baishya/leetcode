// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

/*
pseudo code:
  1. initialize two pointers, slow and fast
  2. move slow one step at a time and fast two steps at a time
  3. if slow and fast meet, return true
  4. if fast reaches the end, return false
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let slow = head
  let fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
console.log(hasCycle([3, 2, 0, -4])) // true
console.log(hasCycle([1, 2])) // false
console.log(hasCycle([1])) // false
