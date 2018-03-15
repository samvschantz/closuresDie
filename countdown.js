var countdownGenerator = function (x) {
  /* your code here */
  var countdownStart = x
  return function(){
    if (countdownStart >= 1){
      console.log('T-minus ' + x + '...')
    } else if (countdownStart === 0){
      console.log('Blast Off!')
    } else {
      console.log('Rockets already gone, bub!')
    }
    countdownStart -= 1
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!