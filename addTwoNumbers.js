// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

/*
pseudo code:
  1. Initialize a dummy node with a value of 0 and the first list as its next node.
  2. Use a pointer `curr` to keep track of the last node in the merged list.
  3. Initialize a carry variable to 0.
  4. While there are nodes in either list or carry is not 0:
    4.1 Calculate the sum of the current nodes and the carry.
    4.2 Update the carry to the floor of the sum divided by 10. 
    4.3 Create a new node with the value of the sum modulo 10.
    4.4 Move the pointers to the next nodes.
  5. Return the dummy node's next node.   
*/  

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0)
  let curr = dummy
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = carry
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
  }
  return dummy.next
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])) // [7, 0, 8]
console.log(addTwoNumbers([0], [0])) // [0]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])) // [8, 9, 9, 9, 0, 0, 0, 1]
