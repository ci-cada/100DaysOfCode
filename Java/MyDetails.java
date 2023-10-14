import java.util.*;
public class MyDetails{
    public static void main(String []args){
    Scanner input = new Scanner(System.in);
    String name;
    int ID; 
    System.out.print("Enter your Name: ");
    name = input.next();
    System.out.print("Enter your ID: ");
    ID  = input.nextInt();
    System.out.print("Welcome " + name +" of ID " + ID);
    }
  }