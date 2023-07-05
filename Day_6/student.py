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