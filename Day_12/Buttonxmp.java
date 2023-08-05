import java.awt.*;
import javax.swing.*;

public class Buttonxmp{
    Buttonxmp(){
        JFrame frame = new JFrame("Button me");
        JButton button = new JButton("Press");
        button.setBounds(100,100,80,30);
        frame.add(button);
        frame.setSize(300,400);
        frame.setLayout(null);
        frame.setVisible(true);

    }
    public static void main(String args[]){
        new Buttonxmp();
    }
}