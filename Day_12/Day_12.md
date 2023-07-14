# Day 12 of 100 Days of Code 

## Java Programming 

Working on GUI programing after previously learning Jlabels and Jframes, today I am going to read o JPanel, JDialog and JButton in Java Swing.

Since I was not feeling that well I took a bit of theoritical approach in the above concepts hoping to apply them in a little bit of practicality.

I will update this day once I manage to pull them all off.

### JPanel

A container class providing a space within which an application can attach any other component. It inherits the components of the JComponents class. It contains no title bar
[JPanel Example](./Panelling.java)

### JDialog

Represents a top level window with a boader and a title used to take some form of input from the user. It inherits the Dialog class. 

Unlike the Jframe it contains no maximize and minimize buttons.

The commonly used constructors in JDialog are;
 - JDialog: to create a modeless Dialog without a title and without a specified Frame Owner
 - JDialog(Frame owner): modeless dialog with specified Frame as its owner
 - JDialog(Frame owner, String title, boolean modal): Dialog with a specified title, owner Frame and modality.
[JDialog Example](./Dialog.java)

 ### JButton 

 This is used to create a boolean labeled button that has a platform independent implementation. The result in some action when the button is pusheed. Inherits itself from AbstractButton class.

[JButton Example](./Buttonxmp.java)



