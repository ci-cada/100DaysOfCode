# Day 28 of 100 Days of Code

ALx had me tripping for a while so uhm I took a break and visited my trusted friend Hackerrank to do tasks and learn more.

### Task

One popular way to read input from stdin is by using the Scanner class and specifying the Input Stream as System.in. For example:
```Java
Scanner scanner = new Scanner(System.in);
String myString = scanner.next();
int myInt = scanner.nextInt();
scanner.close();

System.out.println("myString is: " + myString);
System.out.println("myInt is: " + myInt);
```
The code above creates a Scanner object named scanner and uses it to read a String and an int. It then closes the Scanner object because there is no more input to read, and prints to stdout using System.out.println(String). So, if our input is:
```sh
Hi 5
```
Our code will print:

```sh
myString is: Hi
myInt is: 5
```
Alternatively, you can use the BufferedReader class.

In this challenge, you must read 3 integers from stdin and then print them to stdout. Each integer must be printed on a new line. To make the problem a little easier, a portion of the code is provided for you in the editor below.

**Input Format**

There are 3 lines of input, and each line contains a single integer.


[Solution 1](./Sol1.java)

[Solution 2](./Sol2.java)
