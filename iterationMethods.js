
/*  QUESTION 1 PART 1 

/*METHOD 1 (FOR METHOD)// (Done For my self as a reference)

const greaterThanOrEqual = []
for (let i = 0;i < numbers.length; i=i+1)
{ if (numbers [i] >= 25 )
console.log (greaterThanOrEqual[i];)
}

*/


// METHOD 2 (ITERATION METHOD) (My Answer below here)

const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanOrEqual = numbers.filter(function (num) {
  return num >= 25;
});



// Question??  should i use greaterthanequal.push (numbers[i]) or what I did was correct?



/*  QUESTION 1 PART 2 

/* METHOD 1 (Done For my self as a reference)


const divisibleByFive = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    divisibleByFive.push(numbers[i]);
  }
}

console.log(divisibleByFive);
*/

// METHOD 2 (ITERATION METHOD) (My Answer below here)

divisibleByFive = numbers.filter(function (num) {
  return num % 5 === 0;
});

/*****************************************************************
Part 2: Mapping


/*  QUESTION 2 PART 1

/* METHOD 1 (Done For my self as a reference)

const squares = [];
for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] ** 2);
}
*/

// METHOD 2 (ITERATION METHOD) (My Answer below here)

const squares = numbers.map(function (number) {
  //leaving the function anonymous here
  return number * number;
});
console.log(squares);



/*  QUESTION 2 PART 2 */


 const mulipliedByTwo = numbers.map (function(num) {
  return num * 2
 })
   


/*****************************************************************
Part 3: Combining Filtering and Mapping */

/*  QUESTION 3 PART 1 */


const answers = numbers
  .filter((num) => num >= 20)
  .map((num) => {
    return num * num; 
  });

/*  QUESTION 3 PART 2 */

.filter((num) => num % 5 === 0)
  .map ((num) => {
    return num *3;
  }); 


  /*



