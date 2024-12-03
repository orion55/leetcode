// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    const nextNode = current.next; // Save the next node
    current.next = prev; // Reverse the pointer
    prev = current; // Move prev forward
    current = nextNode; // Move current forward
  }

  return prev; // New head
}
