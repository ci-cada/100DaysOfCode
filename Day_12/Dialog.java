import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;

public class Dialog {
    private static JDialog d;
  
    Dialog(){
        JFrame f = new JFrame();
        d = new JDialog(f,"Example of a Dialog", true);
        d.setLayout(new FlowLayout());
        JButton b = new JButton("Ok");
        b.addActionListener(new ActionListener() {
          public void action(ActiveEvent e){
            Dialog.d.setVisible(false);
          }  
        });
        d.add(new JLabel("Click to continue"));
        d.add(b);
        d.setSize(300, 200);
        d.setVisible(true);


    }
    public static void main(String args[]){
        new Dialog();
    }
}