# Day 18 of 100 Days of Code 

## Java Programming 

### Data Structures and Algorithms

#### Queues

This is defined as an orderd list which enables insert operations to be performed at one end called _REAR_ and delete operations to e performed at another end called _FRONT_

This is refferes to as Frist in First Out list 

Queues real world example is such as people waiting to enter a place or  bus 

**Applications**

They have various applications which include;
- Waiting list for a single shared resource like printer, disk, cpu
- Asynchronous transfer of data.
- Buffers in applications
- To maintain play list in media palyers i norder to add and remove songs from the play list 
- In operating systems to handle interrupts


Queues have various types;
- Simple Queue or Linear Queue
- Circular Queue
- Priority Queue
- Doble Ended Queue

**SIMPLE OR LINEAR QUEUE**

Here, insertion takes plave form one end whie deletion on another end. The insertion takes place in the rear end, the deletion at the front end. It follows the _FIFO_ rule.


If all element in a queue are releived off, remaining only one. There will be no inserting any other element since both the Dequeue and Endqueue point at the same element. This shows an overflow condition.

**CIRCULAR QUEUE**

This is where the last element of the queue is connect to the first element. It is also known as a _Ring Buffer_. This means the ends are connected.

**PRIORITY QUEUE**

A special type of queue, where elements are arranged in terms of priority. It is a special type of queue where each element has a priority associated with it. Insertion in priority takes place based on the arrival and deletion based n the priority. This is mainly used to implement CPU scheduling algorithms.
They are of two types;
 - Ascending priority queue : This is where only the smallest can be deleted first. The insertion can be done inany sequence but the order of deleting starts from the smallest.

 - Descending Priority Queue : Similar to Ascending but the order of deletion changes begining with the largest of them all elements.

**DEQUE/ DOUBLE ENDED QUEUE**

This is where insertion and deletion can be done from both ends of the queue either from the front or the rear. This can be used as a palindrome checker meaning that, reading teh strings from both ends, then the strings would be the same.

This can also be considered as stack since it follows the LIFO principle in which insertion and deletion both can be performed only from one end. 

They are of two types;

 - Output Restricted and Input restricted. Where in general they restrict insertion and deletion on specific ends. For input, the insertion occurs only in one area whilst deletion in both ends. Ouput restriction the deletion is only on one end while insertion on both ends


#### Vaious operations performed on Queue

- Enqueue: Insertion of an element at the rear end of the queue. Returns a Void
- Dequeue: Deletion of an elemnt from the front of the que, returns the element removed
- Peek: The third operation returning the element ponted by the front pointer in the queue
- isfull
- isempty 

**Ways of implementing the Queue**

Queues are implemented using two ways;
- Using Arrays: sequential allocation in a Queue can be implemented using an array.
- Using Linked lists: sequential allocation in a queue can be implemented using a linked list.[Example](./Queued.java)
