class move_robot:
    def __init__(self, n):
        self.dir = (-1,0)
        self.steps = 0
        self.totSteps = n
        self.currLoc = [0,0]

    def __iter__(self):
        return self

    def __next__(self):
        if self.steps >= self.totSteps:
            raise StopIteration()
        
        if self.dir[0] == 0:
            if self.dir[1] > 0:
                self.dir = (1,0)
            else:
                self.dir = (-1,0)
        else:
            if self.dir[0] > 0:
                self.dir = (0,-1)
            else:
                self.dir = (0,1)
        self.steps += 1
        self.currLoc[0] +=  self.dir[0] * self.steps
        self.currLoc[1] +=  self.dir[1] * self.steps
        return self.currLoc

        

for i in move_robot(5):
    print(i)