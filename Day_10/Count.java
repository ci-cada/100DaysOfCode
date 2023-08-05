import java.awt.*;
import java.awt.event.*;
public class Count extends Frame{
//the components are declared as attributes so that they
//can receive messages and send events
private Button subs;
private Button plus;
private Button exit;
private Label results;
private int counter=0;
public Count(String title){
super (title);
setLayout(new GridLayout(0,2));
plus=new Button("+");
results=new Label();
subs=new Button("-");
exit=new Button("Exit");
add(plus);
add(results);
add(subs);
add(exit);
//add a listener for each button.
plus.addActionListener( new ActionListener(){
public void actionPerformed(ActionEvent e){
counter ++ ;
results.setText(Integer.toString(counter));
}
});
subs.addActionListener(new ActionListener(){
public void actionPerformed(ActionEvent e){
if ( counter > 0){
counter --;
results.setText(Integer.toString(counter));
}
}
});
exit.addActionListener(new ActionListener(){
public void actionPerformed(ActionEvent e){
System.exit(0);
}
});
}
public static void main(String args[]){
Count addminus=new Count("Count");
addminus.setBounds(0,0,200,100);
addminus.show();
}
}