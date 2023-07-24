// Define the Node class
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    Node head;

    CircularSinglyLinkedList() {
        head = null;
    }

    void insertNode(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            // If the list is empty, the new node becomes the head, and it points to itself.
            head = newNode;
            newNode.next = head;
        } else {
            // Find the last node and make it point to the new node.
            Node lastNode = head;
            while (lastNode.next != head) {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;

            // Make the new node point back to the head, creating the circular connection.
            newNode.next = head;
        }
    }

    void displayList() {
        if (head == null) {
            System.out.println("Circular Singly Linked List is empty.");
            return;
        }

        Node current = head;
        do {
            System.out.print(current.data + " -> ");
            current = current.next;
        } while (current != head);
        System.out.println("Head");
    }
}

public class Main {public static void main(String[] args) {
        CircularSinglyLinkedList list = new CircularSinglyLinkedList();
        
        // Inserting nodes into the list
        list.insertNode(10);
        list.insertNode(20);
        list.insertNode(30);
        
        // Display the list
        System.out.println("Circular Singly Linked List:");
        list.displayList();
    }
}
