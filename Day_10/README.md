# Day 10 of 100 Days of Code

## Java Programming 

### GUI Programming

This is the creation of user interfaces which people can interact with while performing some tasks.

In Java creation of Graphical User Interfaces are through the abstract windowing toolkit(AWT).

This tool is contained in the java.awt package, containing classes as follows;
- Components
- Containers
- Layout Managers 
- Graphic Classes 
- Event Listeners

#### Components
These allow the user, to interact with the windows i.e. Buttons, Menus.
#### Containers 
These are objects holding and bearing other objects. These contain; Frames, these display the title bar frame and buttons. Panels with no frame or buttons.

#### Layout managers

They allow general application of pattersn to the layout components

#### Graphics Classes 

They are classes that allow;
 - Drawing of shapes and graphical texts 
 - Change font and colors 
 - Load Images

 #### Event liteners

These respond to the mouse being clicked upon them or when a message is sent by the keyboard. 
Some of the event listeners include 

- Action Listener - _actionPeformed()_
- Component Listener - _componentHidden(), componentMoved()_
- Focus Listener - _focusGained(), focusLost()_
- Item Listener - _itemStateChanged()_
- Key Listener - _keyPressed(), keyReleased(), keyTyped()_
- Mouse Listener - _mouseClicked(), mouseEntered(), mouseExited(), mousePassed(), mouseReleased()_
- Text Listener - _textValueChanged()_
- Window Listener - _windowActivated(), windowClosed(), windowClosing(), windowIconified(), windowDeiconified(), windowDeactivated()_

The AWT package also provided classes for AWT API such as Textfields, labels, TextArea, RadioButton, checkboc, choice, list etc.

There are useful components useful in the component class _Frame class_ which are used to perform certain tasks.

 * Public  void add(Component c)
 * Public void setSize(int width, int height)
 * public void setLayout(LayoutManager m)
 * public void setBounds(int xaxis, int yaxis, int width, int height)
 * Public void setVisible(boolean status)

 They perform the following tasks respectively; insert a component in the component, set teh size of the components, defines the layout manager of the component, sets the position of the object and lastly change the visibility in which by default it is set to false

 For one to create a simple awt example, one needs a frame. To create a fram in AWT one;
 - Extends Frame class _inheritance_
 - Creating the object of the Frame class _association_

[A code by inheritance](./First.java) 

### Java Swing 

Being a part of the Java Foundation of Classes (JFC) and created from the AWT API completely written in Java, it is used to develop and create window based applications. It provides classes for Java Swing API such as;
- JButton
- JTextField 
- JTextArea
- JRadioButton
- JCheckbox
- JMenu
- JColorChooser 

![Hierachy](./swing.jpg)

It is imported as follows _import javax.swing.*;_

Compared to Abstract Window Toolkit it has vast of differences which in include.
 - Platform indepence 
 - They are lightweight 
 - Pluggable look and feel
 - Has more powerful components 
 - Follows MVC - such that model represents data, view represents presentation and controller acting as an interface between model and view.
 - Imported from javax and AWT javax.
 These charateristics of Swing make it better to use compared to AWT and they are not contained in AWT. 

Creating a frame using swing can be done in two ways
 - Creating the object of Frame class (association)
    - [A code using Swing](./SwingExamp.java)
 - Extending Frame class (inheritance)

 In Swing we have the following classes that help in GUI Development by allowing the insertion of certain components.

  - Jframe
  - JLabel
  - Jpanel
  - JButton 
  - JApplet
  - JDialog
  - JTextField
  - JTextArea

 These will help in every day to day GUI application development to make user work easier/ allow them to interact with the Interface. 

