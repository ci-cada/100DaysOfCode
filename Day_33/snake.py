class mammals:
    def __init__(self, name, age, house, action):
        self.name = name
        self.age = age
        self.house = house
        self.action = action

    def run(self):

        print(f"{self.name} can really {self.action}")

    def home(self):

        print(f"{self.house} is the house of {self.name}")

class dog(mammals):
    def __init__(self, name, age, house, action, isA):
        super().__init__(name, age, house, action)

        self.domain = isA

    def show(self):
        print(f"{self.name} is a {self.domain}")


class cat(dog):
    def __init__(self, name, age, house, action, isA , sound):
        super().__init__(name, age, house, action, isA):
    pass

mammalA = dog('Juma', 21, 'Bungalow' ,'Running', 'Dog')

mammalA.show()

