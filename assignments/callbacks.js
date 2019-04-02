// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, cb = (elem) => console.log(elem));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, cb = (elem) => console.log(elem));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x+y;
  return cb(result);
}
sumNums(3, 5, cb = (elem) => console.log(elem));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x*y;
  return cb(result);
}
multiplyNums(3, 5, cb = (elem) => console.log(elem));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  let result = list.includes(item)? true: false;
  // Pass true to the callback if it is, otherwise pass false.
  return cb(result);
}
contains("Pencil", items, cb = (elem) => console.log(elem));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  let uniq = [];
  //array.filter(elem => (!uniq.includes(elem)));
  array.forEach(elem => {
    if (!uniq.includes(elem)) uniq.push(elem);
  })
  
  // Pass the duplicate free array to the callback function.
  cb(uniq);

  // Do not mutate the original array.
}
let array_1 = [1,3,2,3,3,322,2,5,2,4,698,29,9];

removeDuplicates(array_1, cb = (array => console.log(array)));
