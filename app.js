/*jshint esversion: 6 */

function factorial (num){

  if (arguments.length > 1){
    throw new Error("Pass a single argument !!!");
  }

  // Call the function to check for good data entered
  validData(num);

    if(num <= 1){
      return 1;
    }

    return num * (factorial(num-1));
}

// function that will check for data validation
function validData(num){

  if (isNaN(num)){
    throw new Error("Pass a number !!!");
  }
  if (num < 0){
    throw new Error("Pass a number greater than 0");
  }
}


module.exports = factorial;