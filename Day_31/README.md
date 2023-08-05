# Day 31 of 100 days of code

I began a new journey learning JavaScript. I did only the basics and hope that I will be able to master it as I have Java, Python, C and the others to be a great software engineer. 

I managed to continue with my 30 day challenge in Python in Hackerrank. With two tasks

**Task 1** 
## Objective
Today we will learn about running time, also known as time complexity. Check out the Tutorial tab for learning materials and an instructional video.

## Task
A prime is a natural number greater than  that has no positive divisors other than  and itself. Given a number, n, determine and print whether it is Prime or Not Prime.

Note: If possible, try to come up with a  primality algorithm, or see what sort of optimizations you come up with for an  algorithm. Be sure to check out the Editorial after submitting your code.

**Input Format**

The first line contains an integer, T, the number of test cases.
Each of the T subsequent lines contains an integer, n, to be tested for primality.

**Constraints**
- 1 <= T <= 30
- 1<= n <= 2 x 10 ^9

**Output Format**

For each test case, print whether  is  or  on a new line.

**Sample Input**
```sh
3
12
5
7

```
Sample Output
```sh
Not prime
Prime
Prime
```
[Solution](solution.py)

**Task 2** 

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards and forwards. Can you determine if a given string, s, is a palindrome?

To solve this challenge, we must first take each character in s, enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means s isn't a palindrome).

Write the following declarations and implementations:

-Two instance variables: one for your stack, and one for your queue.
-A void pushCharacter(char ch) method that pushes a character onto a stack.
-A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
-A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
-A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.

[Solution](./sol.py)

Hit pause on my Java challenge and continuing later on when I have atleast mastered a lil bit of JavaScript. Multicoding might affect my mastery but I take them one step at a time focusing on one more than the others.