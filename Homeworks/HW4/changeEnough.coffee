changeEnough = (changeInPocket, amount) -> 
	change = 0
	change += changeInPocket[0] * .25
	change += changeInPocket[1] * .10
	change += changeInPocket[2] * .05
	change += changeInPocket[3] * .01
	return change >= amount

console.log changeEnough([2, 100, 0, 0], 14.11)
console.log changeEnough([0, 0, 20, 5], 0.75)
console.log changeEnough([30, 40, 20, 5], 12.55)
console.log changeEnough([10, 0, 0, 50], 3.85)
console.log changeEnough([1, 0, 5, 219], 19.99)

# Keep the line below so we can test your code!
module.exports = { changeEnough }