import javax.swing.*;
import java.awt.*;
public class Begin{
    public static void main(String[] args){

        JFrame box = new JFrame();
        ImageIcon  image = new ImageIcon("images.png");
        box.setTitle("Jussie's Logon");
        box.setSize(420,420);
        box.setVisible(true);
        box.setIconImage(image.getImage());
        box.getContentPane().setBackground(new Color(119,7,55));


    }
}