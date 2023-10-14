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