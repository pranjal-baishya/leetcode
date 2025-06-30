/**
 * 1. Create a dummy node that points to the head of the list.
   - This helps handle edge cases like reversing from position 1.
   - dummy.next = head

2. Move a pointer `prev` to the node just before the `left`-th node.
   - for i = 1 to left-1:
       prev = prev.next
   - After the loop: prev points to the (left-1)-th node

3. Initialize `curr` to point to the `left`-th node (start of sublist to reverse).
   - curr = prev.next

4. Start a loop that runs (right - left) times:
   - Each time:
     - Let `temp = curr.next` → node to move to the front of the reversed sublist
     - Rewire pointers to move `temp` after `prev`:
       1. curr.next = temp.next → unlink temp
       2. temp.next = prev.next → point temp to the current front of the reversed part
       3. prev.next = temp → move temp to the front
   - This **inserts each node after `curr` to the front**, effectively reversing in-place.

5. Return dummy.next as the new head of the list.
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  let dummy = new ListNode(0, head)
  let prev = dummy
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let curr = prev.next
  for (let i = 0; i < right - left; i++) {  
    let next = curr.next
    curr.next = next.next
    next.next = prev.next
    prev.next = next
  }
  return dummy.next
}

console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4)) // [1, 4, 3, 2, 5]
console.log(reverseBetween([5], 1, 1)) // [5]
console.log(reverseBetween([3, 5], 1, 2)) // [5, 3]