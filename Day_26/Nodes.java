import java.util.*;
class Node {
    String data;
    Node next;
    public Node(String data){
        this.data = data;
        this.next = next;
    }
}

class Names{
    Node head;// Class variable of the class names
    public Names(){
        this.head = null;
    }
    public void insert(String data){
        Node brand = new Node(data);
        if (head == null){
            head = brand;
        }
        else{
            /**to traverse the code we declare a reference varioable of type Node meaning oit can hold
             * reference to an object of the node
             * ths will be assigned to the head f the node holding reference to the first node of the list
             * Inside the while loop the current is moved to until the last node is reached
             * outside the loop the new node is appended after the each of the last element
             */
            Node current = head;
            while (current.next != null){
                current = current.next;
            }
            current.next = brand;
        }
    }
    public void show(){
        Node current = head;
        while (current != null){
            /**if the current node is not equal to null print the node data
             */
            System.out.print(current.data + " -> ");
            /**the data is the member variable that contains the actual value in the node
             */
            current = current.next;
            /**
             * moves the current value to the next value in the Linked list
             */
        } 
        System.out.println("null");
    }
    public static void main(String[] args) {
        Names list = new Names();
        Scanner input = new Scanner(System.in);
        for (int i = 1; i <= 10 ; i++){
            System.out.printf("Enter member %d: ", i);
            String name = input.next();
            list.insert(name);
        }

        /**
         * list.insert("Juma");
         * list.insert("Cate");
         * list.insert("Hawi"); 
        */
        list.show();
    }
}

