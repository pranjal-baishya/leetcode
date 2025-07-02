// 143. Reorder List
// https://leetcode.com/problems/reorder-list/

/*
pseudo code:
  1. Find the middle of the linked list using the slow and fast pointer approach.
  2. Reverse the second half of the list.
  3. Merge the first half and the reversed second half alternately.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  let slow = head
  let fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let second = slow.next
  slow.next = null
  let prev = null
  while (second) {
    let temp = second.next
    second.next = prev
    prev = second
    second = temp
  }
  let first = head
  second = prev
  while (second) {
    let temp1 = first.next
    let temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1
    second = temp2
  }
  return head
}

console.log(reorderList([1, 2, 3, 4])) // [1,4,2,3]
console.log(reorderList([1, 2, 3, 4, 5])) // [1,5,2,4,3]
