let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");

function sum(){
    document.getElementById('result').innerHTML = Number(firstNum.value) + Number(secondNum.value);
}

function subtract(){
    document.getElementById('result').innerHTML = Number(firstNum.value) - Number(secondNum.value);
}

// console.log("firstNumber");
// console.log("secondNumber");