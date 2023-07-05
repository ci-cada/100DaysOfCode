 5 of 100 Days of Code

## Python Programming
All about python programming today.

Using A tutorial in YoutTube and Challenges in HackerRank, I had me go under a sess with OOP in Python using David J Malaan CS50 Lectures. 

Concepts Learned 
- Object Creation 
- Class creation
- Inheritance

Since these concepts are explained in the earlier lessons on Java had need not explain the concepts again.

The codes I had myself practice are;
```py
class Student:
    def __init__(self, f_name, s_name, grade, class_):
        self.f_name = f_name
        self.s_name = s_name
        self.class_ = class_ 
    def show(self):
        this = f"This student is called {self.s_name} {self.f_name}"

        return this

one = Student('June', 'Khan', 'D', 4)

print(one.show())
```
*Showing inheritance*

```py
   class Person:
      def __init__ (self, name):
        # self allows to attach parameter to the class
          self.name = name
      def naming(self):
          fing = f"This student is called {self.name}"
          return fing 
   class Grades(Person):
       def __init__(self, name, grade):
           super().__init__(name)
           self.grade = grade
        
       def show(self):
            final = f"{self.name} scored {self.grade}"
            return final
  p = Grades('Jussie','0')
 
  print(p.naming())
```