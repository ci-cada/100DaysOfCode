print("Ceaser Cipher")
##doing the ceaser cipher
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
def encryption(text, shift):
    cipher = ""
    for char in text.lower():
        if char in letters:
            pos = letters.index(char)
            n_pos = (pos + shift) % 26
            cipher += letters[n_pos]
        else:
            cipher += char
            
    print(f"The Ecncrypted Data is: {cipher}")
def decryption(text, shift):
    cipher = ""
    for char in text.lower():
        if char in letters:
            pos = letters.index(char)
            n_pos = (pos - shift) % 26
            cipher += letters[n_pos]
        else:
            cipher += char
    print(f"The Decrypted Data is: {cipher}")
    
play = True
while(play):
    print("what do you want to do: [Encrypt] [Decrypt]: ",end="")
    choice = input().strip()
    
    print("Enter the text: ", end="")
    text = input().strip()
    
    print("Enter the digits to shift: ", end ="")
    shift = int(input())
    
    if choice.lower() == 'encrypt':
        encryption(text, shift)
        
    elif choice.lower() == 'decrypt':
        decryption(text, shift)
    else:
        print("Nigga Really!!!")
        
    exit = input("If you want to conntue Enter [Yes] else [No]: ").strip()
    if exit.lower() == 'yes':
        play = True
    else:
        print("Thank You For Visiting Me")
        play = False
        
    