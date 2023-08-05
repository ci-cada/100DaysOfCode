# Day 25 of 100 Days of Code 

## Linked Lists 

### Circular Linked Lists 

This is a list with which the nodes are connected forming a circle. The first and the last node are connected to each other forming a circle.

Tey are of two types;

- Circular Singly Linked Lists: The last node of the list has a pointer to the first node of the list. As we traverse the list we can reach the first node to which it started. This list has no begining or end. A null value is presented in any part of the nodes.

- Circular Doubly Linked List: They have properties similar to that of doubly linked list and circular linked list where the consecutive elements are linked or connected by the previous and next node by a pointer also, pointing to each other are the last and the first nodes.

```Java
public class Node {
	int data;
	Node next;
	
	public Node(int data) {
		this.data = data;
		this.next = null;
	}
}
```
[Representation of Circular Linked list](./CircleSing.java)

#### Advantages of Circular Linked Lists: 

- Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again. 

- Useful for implementation of a queue. Unlike this implementation, we don’t need to maintain two pointers for front and rear if we use a circular linked list. We can maintain a pointer to the last inserted node and the front can always be obtained as next of last.
 
- Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list. 

- Circular Doubly Linked Lists are used for the implementation of advanced data structures like the Fibonacci Heap.

- Implementing a circular linked list can be relatively easy compared to other more complex data structures like trees or graphs.

#### Disadvantages of circular linked list:

- Compared to singly linked lists, circular lists are more complex.

- Reversing a circular list is more complicated than singly or doubly reversing a circular list.

- It is possible for the code to go into an infinite loop if it is not handled carefully.

- It is harder to find the end of the list and control the loop.

- Although circular linked lists can be efficient in certain applications, their performance can be slower than other data structures in certain cases, such as when the list needs to be sorted or searched.

- Circular linked lists don’t provide direct access to individual nodes.


#### Applications of circular linked lists:

- Multiplayer games use this to give each player a chance to play.

- A circular linked list can be used to organize multiple running applications on an operating system.

- These applications are iterated over by the OS.

- Circular linked lists can be used in resource allocation problems.

- ircular linked lists are commonly used to implement circular buffers,

- Circular linked lists can be used in simulation and gaming.