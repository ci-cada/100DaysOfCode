import javax.swing.*;
import java.awt.*;
public class ConBegin extends JFrame{
    ConBegin(){

        
        ImageIcon image = new ImageIcon("download.png");
        this.setTitle("Jussie's Logon");
        this.setSize(420,420);
        this.setVisible(true);
        this.getContentPane().setBackground(new Color(119,7,55));
        this.setIconImage(image.getImage());
    }
    public static void main(String[] args){

        new ConBegin();
    }
}