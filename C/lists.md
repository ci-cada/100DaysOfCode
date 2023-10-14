# Day 46 of 100 Days of Code

## Sigh 

### C programming

Learning all through linked lists. 

**TOPIC: DOUBLE LINKED LISTS**

As ealier studied. Linked lists are node presentation of an array where a node contains the address of the next node. In Single Linked lists the node contains the address of the next node while here the node will contain the address of the previous and the next node.

**RECAP**
- **Singly Lists**
  To test my understanding on Single Linked lists before going deeper into the world of Double linked Lists, here is a code demonsstrating insertion and creation of a node in multiple sectors.

  [CODE](./slist.c)

  **...Continue**

  Double linked lists work similar to the singly linked lists but they have links to the previous node. 

  An example of a doubly linked list node is
  ```c
  struct node{
    
    struct node *prev;
    int data;
    struct node *next;
  }
  ```
The above is a simple example of a Double Linked lists node in C.

A [code](./dlist.c) to show an example of hwo it works.
The code implements a function that adds an element to the list.

A [code](./dfront.c) to show insertion of a node infront of a list.

A [code](./dlast.c) to show insertion of a node at the end of the list.

A [code](./dmid.c) to show insertion of a node at the mid of the list.

A [code](./create.c) to show the entire Double Linked list creation 

A [code](./delfirst.c) showing deleting at the begining.

A [code](./dellast.c) deleting from the middle.

A [code](./dlast.c) deletinf from the end.

A [code](./reverse.c) reversing the list,


The main file is [here](./main.c)

## That's all

## 🤖Happy Coding