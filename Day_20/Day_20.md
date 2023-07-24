# Day 20 of 100 Days of code

## Data Structures and Algorithms 

#### Linked Lists

These are linear data structures with which elements are linked using pointers. They form a series of connected nodes where they store data and the address of the next node.
<div>
<img src = "./linkedlist.jpg">
</div>
*Node* - consists of data and the pointer to the next memory address. Head of the list is accessed through the head node. The last node is called as tail node it usually points to a null.

**Importance of Lists**

- Dynamic structure - they can be altered in size any time/ flexible
- Ease of insertion - Unlike arrays inserting or deleting elements does not require one to shift elements rather change the adress of the element.
- Efficient Memory Utilization - Avoids wastage of memory sicnce it increases as per the requirement 
- Implementation - can be implemented along other data structures. 

**Types of Linked lists**

- Singly Linked lists
- Double Linked lists
- Circular Linked lists 


**Single Lists**

This node has reference to both the next node in sequence. Traversing this list you go in the forward direction.

**Double Lists**

The node has reference to both the next and previous nodes. Allowing movement forwasdn and backward. Each node therefore has reference to the previous and the next node.

**Circular Lists**

The last node and the head node are linked creating a cricular form. It can conprise of either doubly or singly linked lists.

**Basic Operations performed on Linked lists**

- insertion: This is adding of a new node, it involves a series of activities of adjusting the pointers of the next nodes maintaining the proper sequence of the list. It can be performed at any position within the list.

- Deletion: Removing a node from the list. It involves actions similar to the insertion and can occur anywhere within the list

- Searching: This is traversing the list searching for a specific value from the head node to the tail until it is found.

#### Advantages of Linked Lists

- Dynamic Size: Linked lists can grow or shrink dynamically, as memory allocation is done at runtime.
- nsertion and Deletion: Adding or removing elements from a linked list is efficient, especially for large lists.
- Flexibility: Linked lists can be easily reorganized and modified without requiring a contiguous block of memory.

#### Disadvantages of Linked Lists
- Random Access: Unlike arrays, linked lists do not allow direct access to elements by index. Traversal is required to reach a specific node.
- Extra Memory: Linked lists require additional memory for storing the pointers, compared to arrays.