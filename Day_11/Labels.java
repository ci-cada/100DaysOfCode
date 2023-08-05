import javax.swing.*;
import java.awt.*;

public class Labels extends JFrame{
    Labels(){

        JLabel myLabel = new JLabel();// creates a label
        myLabel.setText("My GUI Experience");
        //myLabel.setHorizontalTextPosition(JLabel.CENTER);
        //myLabel.setVerticalTextPosition(JLabel.TOP);
        myLabel.setHorizontalAlignment(JLabel.CENTER);
        myLabel.setVerticalAlignment(JLabel.TOP);
        myLabel.setForeground(new Color(0x00FF00));
        myLabel.setFont(new Font("Times New Roman", Font.ITALIC,14));

        this.setTitle("Jussie's Logon");
        this.setSize(420,420);
        this.setVisible(true);
        this.getContentPane().setBackground(new Color(54,69,79));
        this.add(myLabel);
    }
    public static void main(String[] args){
        new Labels();
    }
}