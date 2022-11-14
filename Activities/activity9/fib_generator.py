def fibonacci(n):
    n1 = 1
    n2 = 0
    for i in range(n)
        if i == 0:
            yield 0
        elif i == 1:
            yield 1
        else:
            ans = n1 + n2
            n2 = n1
            n1 = ans
            yield ans

        

for i in fibonacci(5):
    print(i)