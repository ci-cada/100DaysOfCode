class Node {
    int data;
    Node prev;//This line declares a reference variable prev of type Node, which points to the previous node in the list.
    Node next;//Node next;: This line declares a reference variable next of type Node, which points to the next node in the list.

    Node(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    Node head;
    Node tail;

    DoublyLinkedList() {
        head = null;
        tail = null;
    }

    void insertNode(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            // If the list is empty, the new node becomes both head and tail.
            head = newNode;
            tail = newNode;
        } else {
            // Append the new node to the end of the list.
            tail.next = newNode; //tail.next = newNode;: This line sets the next reference of the current tail node to point to the new node, making it the next node after the current tail.
            newNode.prev = tail;//newNode.prev = tail;: This line sets the prev reference of the new node to point back to the current tail node, making the new node the previous node of the current tail.
            tail = newNode;//tail = newNode;: This line updates the tail to point to the new node, making the new node the new tail of the doubly linked list.
        }
    }

    void displayList() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " <-> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

public class Main {
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        
        // Inserting nodes into the list
        list.insertNode(10);
        list.insertNode(20);
        list.insertNode(30);
        
        // Display the list
        System.out.println("Doubly Linked List:");
        list.displayList();
    }
}
