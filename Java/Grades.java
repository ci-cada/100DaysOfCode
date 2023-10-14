import java.util.*;
class Node{
    Float info;
    Node next;
    public Node(Float info){
        this.info = info;
        this.next = null;
    }
}

class Grades{
    Node head;

    public Grades(){
        this.head = null;
    }
    public void push(Float info){
        Node begin = new Node(info);
        if (head == null){
            head = begin;
        }
        else{
            Node proceed = head;
            while (proceed.next != null){
                proceed = proceed.next;
            }
            proceed.next = begin;
        }
    }
    public void display(){
        Node current = head;
        int i = 1;
        while (current != null){
            System.out.println("Data " + i + current.info);
            current = current.next;
            i++;
        }
        System.out.println("end");
    }
    public static void main(String []args){
        Grades classD = new Grades();
        Scanner input = new Scanner(System.in);
        Float data;
        for (int i = 1; i <= 5; i++){
            System.out.printf("Enter grade %d: ", i);
            data = input.nextFloat();
            classD.push(data);
        }
        classD.display();
    }
}