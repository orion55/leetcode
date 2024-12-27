Explanation:
Initialization:

Use pointers odd and even to traverse and separate odd and even indexed nodes.
evenHead keeps a reference to the head of the even list for reconnecting later.
Reordering:

Traverse the list in a single loop using even and even.next.
Reassign next pointers for both odd and even nodes to maintain the order and separation.
Reconnection:

At the end of the loop, connect the last odd node to the head of the even list.
Edge Cases:

Empty list or a single-node list is handled by returning the head directly.
Complexity:

**Time:**
O(n), as we traverse the list once.

**Space:**
O(1), as no additional data structures are used.
You can test this function by creating a linked list using the ListNode class and calling oddEvenList with its head.