public class Rectangle{
    int len, wid;
    Rectangle(){}
    Rectangle(int length, int width){
        this.len = length;
        this.wid = width;
    }
    public static void main(String []args){
        Rectangle one = new Rectangle(20,30);
        System.out.println("The dimensions [length x Width] are " + one.len + "and" + one.wid);
    }
}