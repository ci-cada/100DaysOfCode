public class Construct{
    String model;
    double capacity;
    Construct(){}
    Construct(String model, double capacity){
        this.model = model;
        this.capacity = capacity;
    }
    public static void main(String[] args){
        Construct one = new Construct("Jane", 2.3);
        System.out.print(one.model + " " +  one.capacity);
    }
}