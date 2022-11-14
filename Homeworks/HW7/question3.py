from tkinter import Canvas, Tk, PhotoImage, NW
import time


class robot:
    def __init__(self, root):
        self.dir = (-1, 0)
        self.steps = 10
        self.x = 200
        self.y = 160
        self.root = root
        self.c = Canvas(self.root, width=400, height=300)
        self.c.pack()
        self.png = PhotoImage(file='robot-32x32.png')
        self.r = self.c.create_image(200, 150, image=self.png, anchor=NW)
        root.bind("<Button-1>", self.move_robot)


    def move_robot(self, event):
        if self.dir[0] == 0:
            if self.dir[1] > 0:
                self.dir = (-1,0)
            else:
                self.dir = (1,0)
        else:
            if self.dir[0] > 0:
                self.dir = (0,1)
            else:
                self.dir = (0,-1)
        x = self.dir[0] * self.steps
        y = self.dir[1] * self.steps
        self.x += self.dir[0] * self.steps
        self.y += self.dir[1] * self.steps
        print(self.dir[0] * self.steps, self.dir[1] * self.steps, self.y)
        self.steps += 10
        # move method (object you want to move, and the direction!)
        # .move (object, xAmount, yAmount )
        if self.x <= 400 and self.y <= 300 and self.x >= 0 and self.y >= 0:
            self.c.move(self.r, x, y)
        else:
            self.c.delete('all')
            self.r = self.c.create_image(200, 150, image=self.png)
            self.steps = 10
            self.dir = (-1,0)
            self.x = 200
            self.y = 150
		

root = Tk()
app = robot(root)
root.mainloop()
