// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

// @ts-ignore
const result = addTwoNumbers(l1, l2);
// @ts-ignore
console.log(linkedListToArray(result)); // Output: [7, 0, 8]
