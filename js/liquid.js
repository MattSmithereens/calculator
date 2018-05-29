var volumeL = function(volumeG) {
  return (volumeG * 3.785412);
};


var volumeG = parseInt(prompt("Gallons"));

alert(volumeL(volumeG) + " liters!");
