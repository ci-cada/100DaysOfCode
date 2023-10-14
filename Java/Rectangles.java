public class Rectangle {
    double width;
    double height;
    Rectangle (){}
    Rectangle(double width, double height){
        this.width = width;
        this.height = height;
    }
    double perimeter (){
        return (width + height) * 2;
    }
    double square(){
        return width * height;
    }
    void setLen(double len , double hei){
        width = len;
        height = hei;
    }
    public static void main(String []args){
        Rectangle one = new Rectangle(10.0,12.0);

        one.setLen(4.0, 4.0);
        System.out.println("Perimeter: " + one.perimeter());
        System.out.println("Square: " + one.square());
    }
}