class Circle
	constructor: (@x=0, @y=0, @radius=1, @color='black') -> 
	area: -> Math.PI * @radius * @radius
	circumference: -> 2 * Math.PI * @radius
	expand: (scale) -> @radius *= scale
circles = [(new Circle 3, 5, 10, 'blue'), (new Circle)]

# console.log circles
# console.log  circles[0].color 
console.log  circles[1].circumference()

