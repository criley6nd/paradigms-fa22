def move_robot(n):
    dir = (-1,0)
    steps = 0
    currLoc = [0,0]

    for i in range(n):
        if dir[0] == 0:
            if dir[1] > 0:
                dir = (1,0)
            else:
                dir = (-1,0)
        else:
            if dir[0] > 0:
                dir = (0,-1)
            else:
                dir = (0,1)
        steps += 1
        currLoc[0] +=  dir[0] * steps
        currLoc[1] +=  dir[1] * steps
        yield currLoc
        

for i in move_robot(5):
    print(i)