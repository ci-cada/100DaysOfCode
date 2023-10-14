import java.util.*;
import javax.swing.*;

public class Stackme{

    //Performs a search algorithm to search for a particular element in the Srack, returns error if the element is not foun
    // else returns element not found
    static void search(Stack<String> stack, String searched){
        int a = (int)stack.search(searched);
        if(a == -1)
        System.out.println("Element not found");
    else
        System.out.println("Element is found at position: " + a );
    }
    public static void main (String args[]){

        Stack<String> stack = new Stack<String>();
        System.out.println(stack.empty());

        stack.push("Juma");
        stack.push("King");
        stack.push("Jazmine");
        stack.push("Lucy");
        stack.push("Shirl");

        System.out.println(stack.empty());
        System.out.println(stack);
        search(stack, "Shirl");

        System.out.println("The element at the top of the stack is: " + stack.peek());


        }
}
