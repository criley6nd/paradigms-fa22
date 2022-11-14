class fibonacci:
    def __init__(self, n):
        self.last = n
        self.i = 0
        self.n1 = 1
        self.n2 = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.i > self.last:
            raise StopIteration()
        
        self.i += 1
        if self.i == 1:
            return 0
        elif self.i == 2:
            return 1
        else:
            ans = self.n1 + self.n2
            self.n2 = self.n1
            self.n1 = ans
            return ans

        

for i in fibonacci(5):
    print(i)