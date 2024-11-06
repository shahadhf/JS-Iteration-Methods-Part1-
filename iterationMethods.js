/*  QUESTION 1 PART 1 */

const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanOrEqual = numbers.filter((num) => {
  if (num >= 25) return true;
  else return false;
});

/*  QUESTION 1 PART 2  */

divisibleByFive = numbers.filter((num) => {
  if (num % 5 === 0) return true;
  else return false;
});

/*****************************************************************
Part 2: Mapping


/*  QUESTION 2 PART 1 */

const squared = numbers.map((num) => num ** 2);

/*  QUESTION 2 PART 2 */

const mulipliedByTwo = numbers.map((num) => num * 2);

/*****************************************************************
Part 3: Combining Filtering and Mapping */

/*  QUESTION 3 PART 1 */

const answers = numbers
  .filter((num) => num >= 20)
  .map((num) => {
    return num * num;
  });

/*  QUESTION 3 PART 2 */

const somenumber = numbers
  .filter((num) => {
    return num % 5 === 0;
  })
  .map((num) => num * 3);
