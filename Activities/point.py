import math

class Point:
    def __init__(self, x,y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"

def distance(p1, p2):
    return math.sqrt(pow((p1.x - p2.x), 2) + pow((p1.y - p2.y), 2))


a = Point(3,7)
b = Point(-1,-2)
print(a)
print(distance(a, b))