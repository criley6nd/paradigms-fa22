# EXAMPLE 1: using an inner function invocation (with -> and without =>) 
class Point
    constructor: (@x,@y) ->
    print1: () ->
        console.log "print1 = (#{@x},#{@y})"
        innerFn = () => (console.log "inner in print1 = (#{@x},#{@y})" )
        innerFn()
    print2: () =>
        console.log "print2 = (#{@x},#{@y})"
        innerFn = () -> (console.log "inner in print2 = (#{@x},#{@y})" ) 
        innerFn()

p = new Point(1,2)
p.print1()
p.print2()



# EXAMPLE 2: using setTimeout
class Person
    constructor: (@name) -> 
    tryToSayHelloButFail: (delay) ->
        console.log "name at tryToSayHelloButFail = #{@name}"
        setTimeout (() -> console.log "Hi from #{@name} :("), delay
    sayHello: (delay) ->
        console.log "name at sayHello = #{@name}"
        setTimeout (() => console.log "Hi from #{@name} :)"), delay


person = new Person "Alice"
person.tryToSayHelloButFail 1 
person.sayHello 1