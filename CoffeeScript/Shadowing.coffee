a = 0
b = 1
c = 2
myFunction = () ->
    a = 100 # Overwrites outer: there's an a out there
    b = 200 # Overwrites outer: there's a b out there
    d = 300 # Local, because there's no d out there


myFunction()
console.log [a,b,c]
console.log d



myFunction2 = (a) ->
    a = 100 # Overwrites parameter a
    b = 200 # Overwrites global b
    d = 300 # Local, because there's no d out there

myFunction2()
console.log [a,b,c]


