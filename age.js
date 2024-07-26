/*  Question 1
Write a function that computes and returns the factorial
 of a number by using a for loop. The factorial of a 
 positive integer n, signified by n!, is defined as the
  product of all integers between 1 and n, inclusive:


n!
Expansion
Result
1!
1
1
2!
1 * 2
2
3!
1 * 2 * 3
6
4!
1 * 2 * 3 * 4
24
5!
1 * 2 * 3 * 4 * 5
120*/


for (let i = 0; i < 5;) {
    console.log(i += 1);
  }
  
/*You may assume that the argument is always a positive integer.



console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

*/

/*The following code causes an infinite loop (a loop that never stops iterating). Why?




let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*Question

Does the following code produce an error? Why or why not? What output does this code send to the console?


for (let i = 0; i < 5;) {
  console.log(i += 1);
}*/

/*Question
The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.



function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/



/*Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8)
*/