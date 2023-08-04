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
    def impos(self):
        print(f"A {self.domain} can't {self.action}")

class cat(dog):
    def __init__(self, name, age, house, action, isA , danger):
        super().__init__(name, age, house, action, isA)
        self.danger = danger
        
    def dang(self):
        print(f"A {self.domain} can {self.danger}")

human = mammals("Kandie", 23, 'Mansion', 'cook')
mammalA = dog('Luffy', 11, 'Bungalow' ,'cook', 'Dog')
cats = cat('Pizza', 3, 'Bungalow' ,'cook', 'Cat', 'bite')

mammalA.impos()
cats.dang()
human.run()
