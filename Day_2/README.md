# Day 2 of 100 Days of Code

## Java Programming 

### Essentials of Java
Still learning theories of Java. Before writting code, Learning how an application in Java is created. Given the steps as follows;
 - Creating a source file - With the text written in Java. This is usually written using atext editor of ones choice ie. VSCode, Intelij Idea e.t.c.
 - Compiling - The source file is later compiled into a byte code file using the Java compiler 
 - Runing the bytecode - The java interpreter in your machine leater runs the bytecodes instructions to those which machines can understand making them perform the tasks given.
[Sample Code](./Rectangle.java) 

#### ERRORS
Having gone through a couple of errors while running my code. I took time t learn about them and why they are caused. Some of the most common errors in Java are; 
 - Compilation
 - Runtime errors
 - Linking errors 

With the following being their primary causes,
 - Compilation Errors are caused by, Method invocation error, leaving out brackets in methods not needing parameters, condition statements, leaving or adding extra braces and leaving semicolons or adding where unneccesary.
 - Linking errors are caused when the programmer misses a spelling or that the programms are missing some import statements or specification of the wrong packages.
 - RunTime errors appear when the programm is running for example when the programmer  tries to use an array index out of bounds, these are cause the program to stop 

#### Statements
In this section we will cover these statements the import and package statement;
- The package keyword is used to create or define a package to which a class belongs, if not it will be given a default package. They are used to group classes 
- The import statement - This is used to import a group of related classes that an Apllication or programm requires to perform a specific tasks

In java there are the following packages;
- applet  = Used primarily in producing classes neccessary to communicate with an applet
- awt = The abstract windowing toolkit that provides Java GUI components that alolow objects been drawn in the screen 
- io = Provinsion of classes fundamental to input and ouput through data stream
- event = for all the event handling programs

##### Noting that when importing a class we use the asterix to import all the classes necessary and specification for the exact class you want to use.

*Example*
```Java
import java.io.*; // imports all 
import java.io.BufferReader; // Specifys 
```

#### Other Need to Know 

- classes should have the same name as the source file
- they should starte in capital letters

## Modifiers
These are these special keywords that control the availability of classes, methods and variables in the source file.
*They are;*
  - Static 
  - Final 
  - Public 
  - Private 
  - Protected 
  - Abstract 

  ### Static
  Used mainly in variables and methods in classes, Class variables being those reference by the class name rather the object name. 
  ### Final 
  Applicable to classes, methods and variables.
  They make variables constant
  ```Java
  final double pi = 3.14159;
  ```
  When modifying a class it prevent it from being inherited and modifies a method meaning it can't be modified by a subclass

  ### Private
  Also known as access modifier since it allows one to control the visibility and access to variable and methods inside your class.
  Applicable to methods and variables. it makes them visible/ accessible only within the class defined 
    ```Java
  private double num;
  ```
  ### Protected 
  Applicable to methods and variables. Makes the member only visible in the package defined and to subclasses of the class defined in any other package.
    ```Java
  protected String name;
  ```
  ### Public 
  It used to makes members accessible universally throughout the code
    ```Java
  Public class HelloMe;
  ```
  ### Abstract 
  This is applicable to classes and methods and they must be extended but not instantiated, being an object can not be created from it. They have  implementatuon in the subclass of the class defined or the defined subclass must be declared abstract 
  #### Tasks 
  - [Application to display name and id](./MyDetails.java) 

## Python Programming 

BeautifulSoup a webscrapping tool. I did not learn much about it or more or less didn't practice much or its concepts but had it installed in my PC, Laptop for future use after am done with the lessons

I was learning from a python activist and teacher/ youtuber Corey Schafer 
His Tutorials have helped me well in my Python journey.

Also on Python Programming I did a bunch of hackerRank challenges paging my way into being an Intemediate Python Programmer 
