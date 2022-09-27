a = 1
b = 2
c = 3

bad = ->
  a = 10            # clobbers outer a
okay = ->
  ((b) -> b = 20)() # writes to local b
better = ->
  do (c=30) ->      # writes to local c



bad()
okay()
better()

console.log [a,b,c] # [10,2,3]