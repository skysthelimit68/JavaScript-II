// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function houseOfDogs() {
  const original = "my original six pups";
  console.log(`I miss ${original} :(`);
  function dogsNow() {
    const badBeagles = "my two beagles";
    console.log(`Why can't ${badBeagles} behave like ${original}?`);
  } 
  dogsNow();
}
houseOfDogs();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter;
  return counter++;
};

const newCounter = counter();
//newCounter();
//newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  obj = {
    counter:0,
    increment: function(){ this.counter++; console.log(this.counter);},
    decrement: function(){ this.counter--; console.log(this.counter);}
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
counterFactory();
console.log(obj.counter);
obj.increment();
obj.increment();
obj.decrement();

