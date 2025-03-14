/**
 * 1. Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.
 */
function calculateSum (a, b) {
return a + b
  }
  const result = calculateSum(5,10);
  // console.log(result);
  
  /**
   * 2. Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.
   */
  function isEven (number) {
  if(number % 2 === 0) {
  return true
  } else {
  return false
  }
  }
  
  /**
   * 3. Write a function named findMax that takes an array of numbers and returns the largest number from the array.
   */
  function findMax (max) {
  return Math.max(...max)
  }
  let arr = [4,5,6,8,43,10,15];
  const maxNumber = findMax(arr);
  // console.log(maxNumber);
  
  /**
   * 4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd number
   */
  let array = [3,2,5,7,8,9,10]
  function filterOddNumbers (arr) {
  return arr.filter(num => num % 2 !== 0)
  }
  const oddResult = filterOddNumbers(array);
  // console.log(oddResult);
  
  /**
   * 5. Write a function named countWords that takes a string and returns the number of words in the string.
   */
  let str = "Hello World!";
  function countWords (str) {
  return str.split(" ").length
  }
  const strResult = countWords(str)
  // console.log(strResult);
  
  /**
   * 6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.
   */
  let duplicatArray = [3,2,5,7,8,9,10,10,2,5,7]
  function removeDuplicates (numbers) {
  let newArr = [];
  for (let number of numbers) {
  if(!newArr.includes(number)) {
  newArr.push(number);
  //  console.log(newArr)
  }
  } return newArr
  }
  const dupResult = removeDuplicates(duplicatArray);
  console.log(dupResult);
  