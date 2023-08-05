# Day 19 of 100 Days of code

With starting my weekend I decided to finalize my Queues before taking the break for the weekend and focus a little on health an mind well being.

I managed to finish my ALX tasks in time so as to finish my other endeavors in my coding journey.

Learning data structures and algorithms in Java.

## Java Programming 
Learning more about queues and its interface.

The Queue interface is present in java.util package and extends the Collection interface is used to hold the elements about to be processed in FIFO(First In First Out) order. It is an ordered list of objects with its use limited to inserting elements at the end of the list and deleting elements from the start of the list, (i.e.), it follows the FIFO or the First-In-First-Out principle.Declaration: The Queue interface is declared as:
```shell
public interface Queue extends Collection 
```
*Creating Queue Objects:* Since Queue is an interface, objects cannot be created of the type queue. We always need a class which extends this list in order to create an object. And also, after the introduction of Generics in Java 1.5, it is possible to restrict the type of object that can be stored in the Queue. This type-safe queue can be defined as:
```Java
// Obj is the type of the object to be stored in Queue 
Queue<Obj> queue = new PriorityQueue<Obj> ();  
```
In Java, the Queue interface is a subtype of the Collection interface and represents a collection of elements in a specific order. It follows the first-in, first-out (FIFO) principle, which means that the elements are retrieved in the order in which they were added to the queue.

The Queue interface provides several methods for adding, removing, and inspecting elements in the queue. Here are some of the most commonly used methods:

- add(element): Adds an element to the rear of the queue. If the queue is full, it throws an exception.

- offer(element): Adds an element to the rear of the queue. If the queue is full, it returns false.

- remove(): Removes and returns the element at the front of the queue. If the queue is empty, it throws an exception.

- poll(): Removes and returns the element at the front of the queue. If the queue is empty, it returns null.

- element(): Returns the element at the front of the queue without removing it. If the queue is empty, it throws an exception.

- peek(): Returns the element at the front of the queue without removing it. If the queue is empty, it returns null.

[Example]

 *PriorityBlockingQueue:* It is to be noted that both the implementations, the PriorityQueue and LinkedList are not thread-safe. PriorityBlockingQueue is one alternative implementation if thread-safe implementation is needed. PriorityBlockingQueue is an unbounded blocking queue that uses the same ordering rules as class PriorityQueue and supplies blocking retrieval operations. 
Since it is unbounded, adding elements may sometimes fail due to resource exhaustion resulting in OutOfMemoryError. Let’s see how to create a queue object using this class.

[Example 2](./Blocking.java)

### Advantages of using the Queue interface in Java:

Order preservation: The Queue interface provides a way to store and retrieve elements in a specific order, following the first-in, first-out (FIFO) principle.

Flexibility: The Queue interface is a subtype of the Collection interface, which means that it can be used with many different data structures and algorithms, depending on the requirements of the application.

Thread–safety: Some implementations of the Queue interface, such as the java.util.concurrent.ConcurrentLinkedQueue class, are thread-safe, which means that they can be accessed by multiple threads simultaneously without causing conflicts.

Performance: The Queue interface provides efficient implementations for adding, removing, and inspecting elements, making it a useful tool for managing collections of elements in performance-critical applications.

### Disadvantages of using the Queue interface in Java:

Limited functionality: The Queue interface is designed specifically for managing collections of elements in a specific order, which means that it may not be suitable for more complex data structures or algorithms.

Size restrictions: Some implementations of the Queue interface, such as the ArrayDeque class, have a fixed size, which means that they cannot grow beyond a certain number of elements.

Memory usage: Depending on the implementation, the Queue interface may require more memory than other data structures, especially if it needs to store additional information about the order of the elements.

Complexity: The Queue interface can be difficult to use and understand for novice programmers, especially if they are not familiar with the principles of data structures and algorithms.