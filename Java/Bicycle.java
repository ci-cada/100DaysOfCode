public class Bicycle {
    int serial;
    String color;
    String make;
    Bicycle(String color, String make, int serial){
        this.color = color;
        this.make = make;
        this.serial = serial;
         }

    int serial(){

        return serial;
    }
    public static void main(String []args){
        Bicycle one = new Bicycle("Red", "Mountain", 2334555);

        System.out.println("The serial number of the Bicycle is: " + one.serial());
    }
}