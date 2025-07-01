/* 
- Initialize a dummy node with a value of 0 and the first list as its next node.
- Use a pointer `prev` to keep track of the last node in the merged list.
- Compare the values of the current nodes in both lists:
  - If the value of `list1` is less than `list2`, set `prev.next` to `list1` and move `list1` to the next node.
  - Otherwise, set `prev.next` to `list2` and move `list2` to the next node.
- Move `prev` to the next node in the merged list.
- After the loop, `prev.next` will point to the remaining nodes in either `list1` or `list2`.
- Return `dummy.next` as the head of the merged list.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0, list1)
  let prev = dummy
  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  prev.next = list1 || list2
  return dummy.next
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1, 1, 2, 3, 4, 4]
console.log(mergeTwoLists([], [])) // []