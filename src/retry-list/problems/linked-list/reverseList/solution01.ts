function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head; // Base case: return the last node or null
  }

  const reversedList = reverseListRecursive(head.next); // Reverse the rest of the list
  head.next.next = head; // Point the next node's next back to current
  head.next = null; // Set the current node's next to null

  return reversedList; // Return the new head
}
