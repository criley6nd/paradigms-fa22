# (params) -> body

sayHello = (name) -> return "Hello there, "+ name; 
greet = (name) => "Hello there, "+ name;
square = (x) -> Math.pow(x,2)

console.log(sayHello("Joanna"))
console.log(greet("Joanna"))
console.log(square(4))



squares = [1..5].map(square) # pass function by name
result = ((x) -> x * 5 ) 16  # call anonymous function



console.log(squares)
console.log(result)


anonymousFunction = (x) -> x * 5
result2 = anonymousFunction(16)
console.log(result2)

#  Syntax:
#  (expression) -> ...
# 		this gets translated to function(expression) {...}
#  (expression) => ...
# 		this gets translated to (expression) => ...

# Metric: Manhattan Distance
# Formula = |x1 - x2| + |y1 - y2|
manhattanDistance = (x1, y1, x2, y2) ->  Math.abs(x1 - x2) + Math.abs(y1 - y2)

# Metric: Euclidean Distance
# Formula = √((x1 - x2)² + (y1 - y2)²)
euclideanDistance = (x1, y1, x2, y2) ->  Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))

distance = (p1, p2, metricCallback=manhattanDistance) ->
	metricCallback(p1[0],p1[1],p2[0],p2[1])


p1 = [4,4]
p2 = [9,7]
# manhattan distance = 8
# euclidean distance = 5.83
console.log "Manhattan distance #{p1} and #{p2} = #{distance(p1,p2)}"


p1 = [4,4]
p2 = [9,7]

console.log distance(p1 , p2) 




