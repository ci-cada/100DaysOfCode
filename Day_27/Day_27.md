# Day 27 of 100 Days of Code


Circular Double Linked lists in Java got me all worn out but could not get it right so I hit pause and decided to do a couple of other Tasks in Java.

In Java, string formatting allows you to construct a formatted string by inserting values into a template string. It is accomplished using the String.format() method or by utilizing the printf() method of PrintStream or PrintWriter classes.

The string formatting options are based on the syntax of the java.util.Formatter class, which supports a set of format specifiers. A format specifier starts with a % character and is followed by optional flags, width, precision, and a conversion character.

The basic syntax of a format specifier is as follows:
```sh
%[flags][width][.precision]conversion
```
Here's a breakdown of each component:

%: The percent sign marks the beginning of a format specifier.

Flags (optional): Flags modify the output format. Some commonly used flags include:

- '-': Left-justify the output within the given width.
- '+': Include a sign (+ or -) for numeric values.
- '0': Pad numeric values with leading zeros.
- ',': Add locale-specific grouping separators (e.g., thousands separator).
- Width (optional): Specifies the minimum width of the field. If the resulting value is shorter than the
width, it will be padded with spaces (or zeros if the 0 flag is used).

- Precision (optional): For floating-point values, it defines the number of digits to be displayed after the decimal point. For other data types, it may have different effects.

- Conversion: Specifies the data type and how to format the corresponding argument. Some commonly used conversion characters include:
```sh
d: Decimal integer
f: Floating-point number
s: String
c: Character
b: Boolean
h: Hash code (hexadecimal)
```
Let's see some examples:

[Example](./Example.java)

You can use these format specifiers with String.format() to create formatted strings or with printf() to directly print the formatted output to the console or a file. String formatting provides a flexible and powerful way to represent data in a more human-readable form.
Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.

To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.

**Input Format**

Every line of input will contain a String followed by an integer.
Each String will have a maximum of 10 alphabetic characters, and each integer will be in the inclusive range from 0 to 999.

**Output Format**

In each line of output there should be two columns:
The first column contains the String and is left justified using exactly 15 characters.
The second column contains the integer, expressed in exactly 3 digits; if the original input has less than three digits, you must pad your output's leading digits with zeroes.

[Solution](./Solution.java)