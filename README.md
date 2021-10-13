# Code Challenge: Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function named `sumOfFourAndSix` that returns the sum of all the multiples of 4 **and** 6 from 1 to 1000, including 1 and 1000.
```
sumOfFourAndSix() //returns 41832
```

2. Write a function named `oddAndEvenInFifteen` that will console.log if a number is odd or even between 0 and 15. 
```
oddAndEvenInFifteen()
// first five console.logs:
// "0 is even"
// "1 is odd"
// "2 is even"
// "3 is odd"
// "4 is even"
// "5 is odd"
```

3. Write a function named `assignGrade` that:
    - takes one integer argument, a score from 0 to 100.
    - returns a grade for the score, either "A", "B", "C", "D", or "F".
    - if the score is from 91-100, the function should return "A"
    - if the score is from 81-90, the function should return "B"
    - if the score is from 71-80, the function should return "C"
    - if the score is from 65-70, the function should return "D"
    - if the score is less than 65, the function should return "F"
```
assignGrade(91) // returns "A"
assignGrade(65)  // returns "D"
assignGrade(80)  // returns "c"
```
