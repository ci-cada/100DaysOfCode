import javax.swing.*;
public class MyDemo{
    public static void main(String[] args){
        JFrame one = new JFrame("Jussie's First Frame");
        JButton ton = new JButton("Booof");
        ton.setBounds(130,100,100,90);
        one.add(ton);
        one.setSize(500,500);
        one.setVisible(true);

    }

}