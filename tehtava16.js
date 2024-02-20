const prompt = require('prompt-sync')();

//asking for numbers
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

//then from stings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

//cheking if these are valid numbers
if(!isNaN(num1) && !isNaN(num2))
{
    //adding these numbers
    var sum = num1 + num2;

    //display
    console.log("The sum of " +num1+ " and " +num2+ " is: " +sum);
}
else 
{
    console.log("Invalid numbers, can not count them. Please enter valid numbers.");
}