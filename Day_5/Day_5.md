# Days 5 of 100 Days of Code

## Java Programming 

After my previous programming tutorials on java programming, I decided to move more into object creation and really undertand the concept of how objects are created in Java.

Performing arithemtics operations in Java can work hand in hand with object creation in Java. Meaning with object we create we can perform arithemtics operations with them. Following the previous code I wrote as a test to my previous Java expedition. I created an object one of the Triangle class with specific attributes and methods. 

This day I am going in deeper in object creation and learning more on them.

Previously I did tests using the object creation method where I created a Rectangle class and gave methods in the class which would be used by the object created to perform tasks such as assigning values, areas and perimeters.

In object creation there are terms that we ought to understand before diving in, this include;
 - Declaration
 - Instantiation 
 - Initializzation 
 - Constructors 
 - Methods 
 - Inheritance 
 - Abstract Classes and Methods 
 - Interfaces 
 
I will use the code below to describe the following terms.
```Java 
class Rectangle {
public int area(int x,int y){
    results=x*y;
    return results;
    }
    public static void main (String args []){
        Rectangle firstRectangle = new Rectangle ();
        int firstArea= firstRectangle.area(10,20)
        System.out.println("The area of the first rectangle is" + " "+ firstArea);
 }
```
### *Declaration*
Variable are declared using the name of the class or interface as the variables type.
_Rectangle firstRectangle =new Rectangle ()_

### *Instantiation*
The new operator instatiates a class allocating memory for a new object, requiring only a single postfix argument 
_new Rectangle ();_

### *Initializaion*
The new operator is followed by a call to a constructor Rectangle(). THis initializing the new oject. though the above code lacks a user defined constructor it is automatically created when compiling the code

Otherwise one can make his/ her own constructor
```Java 
class Rectangle {
int x, y;
public Rectangle(int x, int y){
    this.x = x;
    this.y = y;
}
public int area(int x,int y){
    results=x*y;
    return results;
    }
    public static void main (String args []){
        Rectangle firstRectangle = new Rectangle (10.20);
        int firstArea = firstRectangle.area();
        System.out.println("The area of the first rectangle is" + " "+ firstArea);
 }
}
```
### *Constructors*
Having the same name as the class and no return type they are used to initialize variables, fields in a classa adn is automatically invoked when the class is instatiated.
 - This word in a constructor should only be used to refer to the current object, meanin, the object in which the method is contained.

### *Methods*
 These are functions in associated with an object they have the characteristics and behaviours of a certain object

### *Inheritance*

 This being the ability of a class to inherit properties of another class. In java a subclass inherits the variables and methods from its superclassusing the extends keyword.
 The members inherited by a subclass from a superclass are; public, protected and any memebrs with no access modifier as long as in teh same package.

 _Noting_ 
 - constructors are not inherited 
 - subclasses extends superclasses

### *Abstract Classes and Methods* 
 An abstract class is a class that can be inherited but not instantiated
 declaring a class as an abstract class oen uses the keyword _Abstract_ before the _class_ keyword
 ```Java
 abstract class Demo{

 }
 ```
 abstract methods have no implementation and are declared using an extra abstract method

### *Interface* 
 This is a protocola of behaviour implemented by any class anywhere in the class hierachy. It isa class containing  only abstract methods and fianl static, fields.
 It mainly differs from an abstract class in the following ways;
  - It does not implement any methods
  - can implement many interfaces but a single superclass 
  - it is not part of the class hierachy 

### *Tests*
Write a class called bicycle that has the following:
 A constructor that initializes the following fields class:
  Color
  Make
  Serial number

 A method that returns the serial number;
 
```Java
public class Bicycle {
    int serial;
    String color;
    String make;
    Bicycle(String color, String make, int serial){
        this.color = color;
        this.make = make;
        this.serial = serial;
         }

    int serial(){

        return serial;
    }
    public static void main(String []args){
        Bicycle one = new Bicycle("Red", "Mountain", 2334555);

        System.out.println("The serial number of the Bicycle is: " + one.serial());
    }
}
```

### That is a  wrap