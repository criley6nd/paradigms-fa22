#################################################################
#  Syntax:														#
#  (expression) -> ...											#
# 		this gets translated to function(expression) {...}		#
#  (expression) => ...											#
# 		this gets translated to (expression) => ...				#
#################################################################


# Metric: Manhattan Distance
# Formula = |x1 - x2| + |y1 - y2|
manhattanDist = (x1,y1, x2,y2) => Math.abs(x1-x2) + Math.abs(y1-y2)


# Metric: Euclidean Distance
# Formula = √((x1 - x2)² + (y1 - y2)²)
euclideanDist = (x1,y1, x2,y2) -> Math.sqrt(Math.pow(Math.abs(x1-x2),2) + Math.pow(Math.abs(y1-y2),2))

# TODO: function distance(p1, p2)
distance = (p1, p2, metric = manhattanDist) ->
	return metric(p1[0], p1[1], p2[0], p2[1]) # return keyword is optional
	
# TODO: function invocation with / without values to default parameters
p1 = [4,4]
p2 = [9,7]

console.log("Manhattan Distance is #{distance(p1,p2)}")
console.log "Euclidean Distance is #{distance(p1,p2, euclideanDist)}"



fib = (n) ->
	if n == 0 
		return 0
	if n == 1
		return 1
	return fib(n-1) + fib(n-2)

console.log fib(1)
console.log fib(2)
console.log fib(3)