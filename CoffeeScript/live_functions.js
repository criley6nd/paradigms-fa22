// Generated by CoffeeScript 2.7.0
(function() {
  //################################################################
  //  Syntax:														#
  //  (expression) -> ...											#
  // 		this gets translated to function(expression) {...}		#
  //  (expression) => ...											#
  // 		this gets translated to (expression) => ...				#
  //################################################################

  // Metric: Manhattan Distance
  // Formula = |x1 - x2| + |y1 - y2|
  var manhattanDist;

  manhattanDist = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  // Metric: Euclidean Distance
// Formula = √((x1 - x2)² + (y1 - y2)²)

  // TODO: function distance(p1, p2)

  // TODO: function invocation with / without values to default parameters

}).call(this);
