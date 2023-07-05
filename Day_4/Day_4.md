# Days 4 of 100 Days of Code

## Java Programming 

Today I am taking a look at arrays, strings and control flow statements.

Learning how to create an array, use, accessing an element and having the size and working with multidimentional arrays. Also we will use loops and control flow statements to run through the arrays and assign and apoint variables.

### Arrays 

These are structures holding multiple values of the same type. The value of the array can be initialized. Java does not allow out of bounds elements.

Arrays are created as so 
```Java
public class Arrays {
    public static void main(String []args){
      int [] myArray =  new int[];
      myArray = new int[10];
    }
} 
```
Arrays re declared normmally as the other variables but the difference is using the _[]_ 
There can be many types of arrays, _bool_, _float_, _String_, _float_ etc.

Arrays can be instantiated like so;
```java 
public class Arrays {
    public static void main(String [] args) {
        int [] newArray = [10,20,40,60,32];
    }
}
```
One can access the element of the array created by using its index in the array
```Java

 element5 = newArray[5]
 ```
Going through Multidimensional arrays we define one as follows;
```Java
 int myArray [][] = {{1, 2, 3, 4, 5}, {5, 6, 7}}
 ```
 Then we access our elements using the following ways;
 ```Java
 public class Arrays {
    public static void main(String []args){
      int myArray [][] =  {{1, 2, 3, 4, 5}, 
                           {5, 6, 7, 8, 9}};
      System.out.println(myArray[0][2]);
    }
}
```

### Strings 

Strings in Java are created using various ways;
- String name = new String("Jussie);
- String name = "Jussie";
- String name2 = name;

#### String manipulation methods

- Length() method used to calculate the length of the string
- capacity() method used to calculate the amount allocated in the string buffer
- CharAt() method used to return the character at the particual index specified in the method 
- toUpperCase() method used to convert string to upper case
- toLowerCase() method used to convert string to lower case

*sample code to show these* 
```Java
public class StringDemo{
    public static void main(String []args){
    String name = "Jussie";
    String grade = new String("d");
    System.out.println("That is a fail " + name + " you have " + grade.toUpperCase());
    }
}
```
### Control Flow Systems
Control flow systems are used to execute statements, loop over statements or jump to another area in the program.

They are as follows, they are used as follows;

- looping - while, do-while, for 
- decision making - if-else, switch-case
- exception handling - try-catch-finally, throw
- branching - break, continue, label;, return

#### Loopings 

With less explanations and more practicals I will show how the statements work with code to perform certain operations followinng with their synatax.
*The while* 
```Java
/** While (expression){
 * statement
 * }
 */
impory java.util.*;
public class WhileLopp(){
    public static void main(String[] args){

        int a, sum = 0;
        while (a < 5>){
            try{ 
                Scanner input = new Scanner(System.in);
                System.out.printf("Enter the value: ");
                a = input.nextInt();
                sum += a 
                a++;

        }catch(Exception e){
        }
    }
    System.out.printf("The sum of values are: %d", sum );
}
```
*The Do while*
This is similar to the while statement but it executes the expression at the bottom of the code.
```Java
/** Do {
 *  statements
 * }while(expression)
 */
impory java.util.*;
public class WhileLopp(){
    public static void main(String[] args){

        int a, sum = 0;
        do {
            try{ 
                Scanner input = new Scanner(System.in);
                System.out.printf("Enter the value: ");
                a = input.nextInt();
                sum += a 
                a++;

        }catch(Exception e){}
        }while (a < 5>)
    System.out.printf("The sum of values are: %d", sum );
}
```
*The for Statement*
```Java
/** for(initialization; termination; increment){
 * statement 
 * }
 */
public class ForDemo {
public static void main(String[] args) {
        int[] arrayOfInts = { 32, 87, 3, 589, 12, 1076,2000, 8, 622, 127 };
        for (int i = 0; i < arrayOfInts.length; i++) {
        System.out.print(arrayOfInts[i] + " ");
        }
        System.out.println();
    }
}
```
*if/ else statements*
Enables program to selectivelt execute statements if a certain creteria is met
```Java 
/**
 * if (expression){
 * statement(s)
 * }
 * 
 * if (expression){
 * statement(s)
 * }else {
 * statement(s)
 * }
 * 
 * if (statement){
 * statement(s)
 * }else if(statement){
 * statement(s)
 * }else{
 * statement(s)
 * }
 */
public class IfElseDemo {
        public static void main(String[] args) {
            int testscore = 76;
            char grade;
            if (testscore >= 90) {
                grade = 'A';
            } else if (testscore >= 80){ 
                grade = 'B';
            } else if (testscore >= 70){ 
                grade = 'C';
            }else if (testscore >= 60){ 
                grade = 'D';
            } else {
                grade = 'F';
            }
            System.out.println("Grade = " + grade);
        }
}
```
*The Switch Statement*
This performs statements based on an interger expression or a string 
This short programm will show the use while displaying the month of the number stated
```Java
/**
 * switch (expression){
 * case expression:
 * statement(s)
 * break;
 * 
 * case expression:
 * statement(s)
 * break;
 * defaut: 
 * statement(s)
 * break;}
 */
public class SwitchDemo {
        public static void main(String[] args) {
        int month = 8;
        switch (month) {
            case 1: System.out.println("January"); break;
            case 2: System.out.println("February"); break;
            case 3: System.out.println("March"); break;
            case 4: System.out.println("April"); break;
            case 5: System.out.println("May"); break;
            case 6: System.out.println("June"); break;
            case 7: System.out.println("July"); break;
            case 8: System.out.println("August"); break;
            case 9: System.out.println("September"); break;
            case 10: System.out.println("October"); break;
            case 11: System.out.println("November"); break;
            case 12: System.out.println("December"); break;
            default: System.out.println("Hey, that's not a valid month!"); break;
}
}
}
```
*Exception Handling Statements*
To start of an exception is  a mechanism that enables programs to report and handle erros without making the program misbehave. An _exception handler_ being a block that handles a particular type of error attempting to recover from the error, if unrecoverble the handler provides an exit from the program

Statements used in Exception Handling are;
 - Try; Identifies a block of statements within which an error might occur 
 - Catch; Identifies a block of statements that can handle a particular type of exception. They are only executed if the exception occurs withing the try block.

The syntax is;
```Java 
    try {
        statement(s)
    } catch (exceptiontype name) {
    statement(s)
    }
```

*Branching* 
These are statements used to jump the flow of execution from one part of the program to another. They are used mainly inside the control statements
They include;
 - Contiue statement; skips the current iteration of a for, while, do-while loops, the unables continue statement skips to the end of the innermost loops body and evaluate the boolean expression controlling the loop.
 - Return statement; exits from a method within which it is instantiated

*Tests*
Create a program to display the number of days in a given month of a given year.
The month should be represented by a number which should be entered by the user.
If the month is February on a leap year the output for instance should be
“number of days=29”
```Java
import java.util.*;
public class Days{
    public static void main(String []args){
        Scanner input = new Scanner(System.in);
        int []year;
        int leap[] = {0,31,29,31,30,31,30,31,31,30,31,30,31};
        int normal[] = {0,31,28,31,30,31,30,31,31,30,31,30,31};
        System.out.print("Enter the  year: ");
        int selection = input.nextInt();
        if(selection % 4 == 0){
            year = leap;
        }else{
            year = normal
        }
        Sytem.out.print("Enter the month number: ");
        int number = input.nextInt();
        for(int i = 1 ; i < year.length; i++){
            if(i == number){
                System.out.print("Number of days = " + year[i]);
            }
        }
    }

}
```

## Python Programming

This day I took part in a python challenge on Hackrank which had me get a certificate.

Started a python tkinter course with Corey Schafer and BroCode.