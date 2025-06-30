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