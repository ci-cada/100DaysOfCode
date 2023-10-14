import java.util.concurrent.PriorityBlockingQueue;
import java.util.*;

class Blocking {
	public static void main(String args[])
	{
		// Creating empty priority
		// blocking queue
		Queue<Integer> blocker = new PriorityBlockingQueue<Integer>();

		// Adding items to the pbq
		// using add()
		blocker.add(10);
		blocker.add(20);
		blocker.add(15);

		// Printing the top element of
		// the PriorityBlockingQueue
		System.out.println(blocker.peek());

		// Printing the top element and
		// removing it from the
		// PriorityBlockingQueue
		System.out.println(blocker.poll());

		// Printing the top element again
		System.out.println(blocker.peek());
	}
}
