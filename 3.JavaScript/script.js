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
