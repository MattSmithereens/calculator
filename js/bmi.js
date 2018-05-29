var degreesC = function(degreesF) {
  return ((degreesF -32) /  1.8);
};


var degreesF = parseInt(prompt("enter degrees F"));

alert(degreesC(degreesF));
