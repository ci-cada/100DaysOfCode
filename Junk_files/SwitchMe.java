import java.util.*;

public class SwitchMe{
    SwitchMe(){}
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Choice: ");
        String choice = input.next();
        switch (choice) {
            case "A":
                System.out.println("Cooking Fat");
                break;
            case "B":
                System.out.println("Maize Flour");
                break;
            case "C":
                System.out.println("Sugar");
                break;
            case "D":
                System.out.println("Salt");
                break;
            case "E":
                System.out.println("Bread");
                break;
            default:
                System.out.println("Unknown Item");
                break;
        }
    }
}

