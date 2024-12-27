// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head; // If the list is empty or has only one node, return as is
  }

  let odd: ListNode | null = head; // Head of the odd-indexed nodes
  let even: ListNode | null = head.next; // Head of the even-indexed nodes
  const evenHead: ListNode | null = even; // Keep reference to the even list head

  while (even && even.next) {
    odd.next = even.next; // Connect odd nodes
    odd = odd.next; // Move to the next odd node
    even.next = odd.next; // Connect even nodes
    even = even.next; // Move to the next even node
  }

  odd.next = evenHead; // Connect the end of the odd list to the even list head

  return head; // Return the modified list head
}
