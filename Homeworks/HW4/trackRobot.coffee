trackRobot = (@north=0, @east=0, @south=0, @west=0) -> 
	coords = [0,0]
	coords[1] += north
	coords[0] += east
	coords[1] -= south
	coords[0] -= west
	return coords

console.log trackRobot(20, 30, 10, 40) 
console.log trackRobot() 
console.log trackRobot(-10, 20, 10)

module.exports = { trackRobot }

