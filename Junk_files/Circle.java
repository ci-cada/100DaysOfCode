import java.util.*;

public class Circle{

    double radius;
    Circle(){}
    Circle(double radius){
        this.radius = radius;
    }

    public double circumference(){
    return radius * 2 * 3.14;
    }

    public double area(){
        return radius * radius * 3.14;
    }
    public static void main(String[] args){

        Circle one = new Circle();
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the radius: ");
        double rad = input.nextDouble();
        one.radius = rad;

        System.out.println("The circumference of the circle is: " + one.circumference());
        System.out.println("The area of the circle is: " + one.area());

    }
}