import random
print("Welcome to the rock paper scissors console game!!!")
def play():
    
    computer_choices = ['Rock', 'Paper', 'Scissors']
    computer = random.randint(0,2)
    choice = computer_choices[computer]
    computer_score = 0
    player_score = 0
    count = 0 
    while(count < 10 ):
        player = input("Enter your choice: ")
        computer = random.randint(0,2)
        print("Your choice is: ", player)
        print("Computer chooses: ", choice)
        
        if player.lower() == choice.lower():
            print("Draw")
            computer_score += 0.5
            player_score += 0.5
            count += 1
        
        elif player.lower() == 'paper' and  choice.lower() == 'sciccors':
            print("Computer wins\
            \nScissors cut Paper")
            computer_score += 1
            count+=1
        
        elif player.lower() == 'scissors' and  choice.lower()== 'paper':
            print("Player wins\
            \nScissors cut Paper")
            player_score += 1
            count+=1
        
        elif player.lower() == 'scissors' and  choice.lower() == 'rock':
            print("Computer wins\
            \nRock break Paperr")
            computer_score += 1
            count+=1
        
        elif player.lower() == 'rock' and  choice.lower()== 'scissors':
            print("Player wins\
            \nRock break Paper")
            player_score += 1
            count+=1
        
        elif player.lower() == 'paper' and  choice.lower() == 'rock':
            print("Player wins\
            \nPapers covers Rock")
            player_score += 1
            count+=1
        
        elif player.lower() == 'rock' and  choice.lower() == 'paper':
            print("Computer wins\
            \nPapers covers Rock")
            computer_score += 1
            count+=1
    
    final = computer_score if computer_score > player_score else player_score
    winner = ''
    if computer_score > player_score:
        winner += f"The winner is computer with {final}"
    else:
        winner += f"The winner is player with {final}"
    return winner

control = True
while(control):
    start = input("Welcome to the rock paper scissors game\nDo you want to play [Yes] [No]: ")
    if start.lower() == 'yes':
        score = play()
        print(score)
        control = True
    else:
        print("Come again next time!!!!")
        control = False
 