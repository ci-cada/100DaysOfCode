import java.util.*;

public class Queued{
    public static void main(String args[]){
        Queue<String> queue = new LinkedList<String>();
        //offer(). used to push elements
        queue.offer("Jussie");
        queue.offer("Caren");
        queue.offer("Ossie");
        queue.offer("Julian");
        queue.offer("Kate");

        //poll() used to pop out elements
        queue.poll();

        //returns the head of the queue.
        queue.element();

        //add() inserts teh specified element into the queue.
        queue.add("Poh");

        //this shows the size of the queue.
        queue.size();

        //removes the head f the queue. Whilst throwing an exception if the queue is empty.
        queue.remove();

        //contains checks if the queues cotains a specific value. Returns True if it is contained in the queue
        queue.contains("Kate");

        System.out.print(queue);
    }
}