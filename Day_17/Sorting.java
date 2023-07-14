// Java program to sort a stack 
import java.util.*;

class SortStack
{
	// This function return the sorted stack
	public static Stack<Integer> sortstack(Stack<Integer> input)

	{
		Stack<Integer> tempStack = new Stack<Integer>();
		while(!input.isEmpty())
		{
			// pop out the first element
			int tmp = input.pop();
		
			/**
             * while temporary stack is not empty and
             * top of stack is lesser than temp
            */

			while(!tempStack.isEmpty() && tempStack.peek() < tmp)
			{
				/**
                 * pop from temporary stack and
                 *  push it to the input stack*/

			input.push(tempStack.pop());
			}
			
			// push temp in temporary of stack
			tempStack.push(tmp);
		}
		return tempStack;
	}
	
	public static void main(String args[])
	{
		Stack<Integer> input = new Stack<Integer>();

		input.add(56);
		input.add(78);
		input.add(90);
		input.add(87);
		input.add(80);
		input.add(10);
	
		// This is the temporary stack
		Stack<Integer> tmpStack = sortstack(input);
		System.out.println("Sorted numbers are:");
	
		while (!tmpStack.empty())
		{
			System.out.print(tmpStack.pop()+" ");
		}
	}
}
// This code is contributed by Danish Kaleem
