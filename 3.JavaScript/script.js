// Compare two numbers
var number1 = prompt("Enter the first number : ");
var number2 = prompt("Enter the last nunmber : ");

if (number1 > number2)
    console.log("First number is greater than Last number");
else if (number2 > number1)
    console.log("Last number is greater than First number");
else
    console.log("Both numbers are equal");


//Checking Vowels

var letter = prompt("Enter a alphabetc : ");
letter = letter.toLowerCase();
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("The letter is Vowel");
        break;
    default:
        console.log("The letter is consonant");
}


//get the input from user and print even number from 2 to 100 (for loop)

var startNumber = prompt("Enter the start number : ");
var lastNumber = prompt("Enter the last number : ");
for (var i = startNumber; i <= lastNumber; i = i++) {
    console.log(" " + i);
}

// what is the result of "2"*3
console.log("2" * 3);

// Multiplication Table
var tableNumber = prompt("Enter the number till you look for the multiplication Table: ");
for (var i = 1; i <= 10; i++) {
    console.log("***************" + "Multiplication Table for :" + i + " ***************");
    for (var j = 1; j <= tableNumber; j++) {
        console.log("Multiplication of " + i + "*" + j + " is: " + (j * i));
    }
}