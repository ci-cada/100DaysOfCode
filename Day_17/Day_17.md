# Day 17 of 100 Days of Code

## Java Programming 

### Data Structures and Algorithms 

#### Stack 

This is a type of linear data structure that follows the LIFO(Last-in-First-oyt) principle. 
The stack has only one end containing one pointer, to the top pointing to the topmost element of the stack.

Therefore, *A stack is a container in which insertion and delection can be done form one end known as the top of the stack*

**Working of Stack**

It utilises the LIFO pattern. Where only the top elements can be deleted and when an element is added it goes up to the top of the list. It gets its name from the real world implication _stack of books_ the books accessible are the ones at the top rather than the ones in the bottom.

##### Common Operations in Stack 

- push: adding an element in a stack 
- pop: this is deleting an element from a stack if there is no element the condition is known as underflow state
- isEmpty
- isFull
- peek: return an element at the specified position 
- count: total number of elements in stack 
- change - changes an element at a given position 
- display - shows all he elements within the stack

In order for one to create a stack in Java you must import the _java.util.stack;_ package and use the _Stack()_ constructor of this class.

*Syntax*

```Java
Stack <E> stack = new Stack<E>();
//E is the data type of the object created
```

[Stack Example](./Stackme.java)

#### Deque

The Stack class inherits from Vetor in Java, a thread-safe class involing  a overhead when thread safety is not needed. It is recommended to use ArrayDeque for stack implementation as it is more efficient in a single threaded environment 

**Application**

```Java
import java.util.*;
calss Deq(){
  public static void main (String[] args) {
        Deque<Character> stack = new ArrayDeque<Character>();
        stack.push('A');
        stack.push('B');
        System.out.println(stack.peek());
        System.out.println(stack.pop());
    }
}
```

[Sort Algorithm in stack](./Sorting.java)