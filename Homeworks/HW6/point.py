import math

class Point:
    def __init__(self, x,y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"

    def __eq__(self, p2):
        origin = Point(0, 0)
        return distance(self, origin) == distance(p2, origin)
    
    def __lt__(self, p2):
        origin = Point(0, 0)
        return distance(self, origin) < distance(p2, origin)
    
    def __le__(self, p2):
        origin = Point(0, 0)
        return distance(self, origin) <= distance(p2, origin)

    def __gt__(self, p2):
        origin = Point(0, 0)
        return distance(self, origin) > distance(p2, origin)

    def __ge__(self, p2):
        origin = Point(0, 0)
        return distance(self, origin) >= distance(p2, origin)

def distance(p1, p2):
    return math.sqrt(pow((p1.x - p2.x), 2) + pow((p1.y - p2.y), 2))


a = Point(-13,7)
b = Point(300,7)
print(a)
print(distance(a, b))
print(a == b)
print(a < b)
print(a <= b)
print(a > b)
print(a >= b)