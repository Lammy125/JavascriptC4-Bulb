function primeNo(integer) {
    for (let x = 2; x < integer; x++) {
        if (integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false;
        }
    }
   return true;
}


function reverseNumber (reverseMe) {
    let reversed = "";
    for (let x = reverseMe.length - 1; x >= 0; x--) {
        reversed += reverseMe[x];
    }
    return reversed;
}


var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }