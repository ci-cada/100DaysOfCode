# Day 24 of 100 Days of Code

## Linked lists 
### Doubly linked lists
As we discussed earlier linked lists are a form of lists where the nodes contains addresses to the next and previous nodes allowing movement forward and backward in the list

[Example](./Single.java)

### Advantages
- A DLL can be traversed in both forward and backward directions. 
- The delete operation in DLL is more efficient if a pointer to the node to be deleted is given. 
- We can quickly insert a new node before a given node. 
- In a singly linked list, to delete a node, a pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using the previous pointer. 


### Disadvantages

- Every node of DLL Requires extra space for a previous pointer. It is possible to implement DLL with a single pointer though (See this and this). 
- All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with the next pointers. For example in the following functions for insertions at different positions, we need 1 or 2 extra steps to set the previous pointer.

Singly linked lists have the following applications 

- They are used by web browsers for forwad and backward navigation of web pages
- The LRU(Last Recently Used)/ MRU(Most Recently Used) cache are constructed using Doubly Linked lists.
- By a number of applications in maintaining undo and redo functionalities.
- In operating systems, it is maintained by a thread scheduler to keep track of processes that re executed at the time. 

[A code perfroming an insertion in Double linked list](./InsertMe.java)