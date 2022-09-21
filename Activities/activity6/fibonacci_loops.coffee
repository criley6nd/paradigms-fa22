fibonacci = (n) ->
    if n < 0
        return null
    if n < 1
        return 0
    if n == 1
        return 1
    prev1 = 1
    prev2 = 0
    for c in [2..n]
        temp = prev1
        prev1 = prev1 + prev2
        prev2 = temp
    
    return prev1

for i in [0..10]
    console.log i, fibonacci(i)