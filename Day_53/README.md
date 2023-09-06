# Day 53 of 100 Days of Code 

## Deep Dive Intro Tkinter

As earlier, I started an introductory course on tkinter where I familiarized myself with the methods and keywords associated with Tkinter, I followed a step by step tutorial on how to get started with Tkinter after reading through certain concepts in Tkinter, I had earlier installed Tkinter in my computer working on a certain project but it was not all good so I hit pause to learn the concepts an get back a better person than I was.

The Tutorial by [Codemy](https://codemy.com) made me learn how to create titles for our windows, enter input fields Using _entry_, getting buttons, building a calculator, using the grid system to position items on the screen and packing the data in the field using _pack()_.

After learning these concepts I decided to build projects based on them, without following the tutorial or guide. I came up with a few improvisations of mine after learning how to insert an Exit button, to exit my calculator. 

For A little bit of recap

**Exit**
```py
quit = Button(root, text="Quit", command= root.quit)
quit.grid(root, row=0, column=2)#for positioning
```
**Icon**
```py
root.iconbitmap("image")
```
I futher learnt about the _Pillow_ package for insterting images.

```py
from PIL import ImageTk, Image

image = ImageTk.PhotoImage(Image.open("Image"))
```
**Entry**
```py
label = tk.Label(text='Enter Data')
entry = tk.Entry()
```
There are other methods with entry which are;

- delete(): OV
- get(): retrieves the text input in the Entry method
- insert(): If the netry contains a data it adds it at the specified position in the text.


### **Off Peak**
##### Frames
Frame widgets can be configured with a relief attribute that creates a border around the frame. You can set relief to be any of the following values:
- tk.FLAT: Has no border effect (the default value)
- tk.SUNKEN: Creates a sunken effect
- tk.RAISED: Creates a raised effect
- tk.GROOVE: Creates a grooved border effect
- tk.RIDGE: Creates a ridged effect

Description:
- tk.FLAT creates a frame that appears to be flat.
- tk.SUNKEN adds a border that gives the frame the appearance of being sunken into the window.
- tk.RAISED gives the frame a border that makes it appear to stick out from the screen.
- tk.GROOVE adds a border that appears as a sunken groove around an otherwise flat frame.
- tk.RIDGE gives the appearance of a raised lip around the edge of the frame.

> Check check 

## JavaScript 

Continued with the loop tasks on JS[.Day_37]
### Happy Coding🎉🤸🏾‍♂️