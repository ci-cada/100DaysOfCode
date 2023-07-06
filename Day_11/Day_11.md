# Day 11 of 100 Days of Code 

## Java Programming

After learning about the classes which help in GUI development in.
Diving deeper and deeper into the world of GUI programming in Java.
The following were the classes discussed. 

  - Jframe
  - JLabel
  - Jpanel
  - JButton 
  - JApplet
  - JDialog
  - JTextField
  - JTextArea
  
### Jframe 

A container inheriting from the awt.frame class, it is imported from swing as swing.JFrame
It works as the main window where labels, buttons and texfields are added creating a GUI.

This unlike Frame, has the option to hide and or close the window with the help of setDefaultCloseOperation(int) method.

[Sample Code](./Begin.java)

There are methods used in JFrame allowing for performance of specific tasks i.e adding a compnent on the frame, resizing, access and many more.

Some of these methods are;
 - setTitle() _sets the title of the frame_
 - setDefaultCloseOperation() _exit out of application_
 - setResisable() _takes in a boolean value for the frame to be resizable or not_
 - setSize() _takes in two integers for the size of the frame_
 - setVisible() _makes the frame visible_
 - setIconImage(image.getImage()) _change the icon of a frame_
 - getContentPane().setBackground(new Color("color")) _change color of background_

**NOTE** Not all methods are available in the _javax.swing_ package so for one to add or edit some of the properties of the JFrame you should import the _java.awt_

#### Creating a Frame Using a Contstructor

For one to create a JFrame from a constructor you ought to extend our class with the JFrame class, this gives your class access to the mehods inside the class.

[Example](./ConBegin.java)


## JLabel 

This is a component of the frame so for one to insert a label one should have the frame.

Frames are used to disple a string of text and image or a combination of both.

The methods used to create labels;
 - default application _...new JLabel('String')_
 - setText() _takes in a string_
 - setIcon() _adds an icon to the label_
 - myLabel.setVerticalAlignment(Jlabel.<position you prefer>) _positions the text in the frame_
 - myLabel.setHorizontalAlignment(Jlabel.<position you prefer>) _positions the text in the frame_
 
 [JLabel Example](./Labels.java)
