##########################################################
# EXAMPLE 1: Initializes an array with 5 zeros  


# Alternative 1: using for loops
arr1 = []
for i in [1..5]
	arr1.push(0)

# Alternative 2: Using comprehensions
arr2 = (0 for x in [1..5])

# Prints 
console.log arr1 # [ 0, 0, 0, 0, 0 ]
console.log arr2 # [ 0, 0, 0, 0, 0 ]

##########################################################
# EXAMPLE 2: Computing the salaries from an array of objects

employees = [
  {name: 'alice', salary: 85000}
  {name: 'bob', salary: 77500}
  {name: 'chi', salary: 58200}
  {name: 'dinh', salary: 99259}
  {name: 'ekaterina', salary: 105882}
  {name: 'fahima', salary: 79999}]


highEarners = (e.name for e in employees when e.salary > 80000)
shortNames = (e.name for e in employees when e.name.length < 4) 
console.log highEarners 	# ['alice', 'dinh', 'ekaterina'] 
console.log shortNames 	 	# ['bob', 'chi']



