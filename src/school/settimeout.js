/*

The Node setTimeout() Function
Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key.
Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation.
These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time.
To accomplish this, we’ll be using setTimeout(). setTimeout() is a Node API (a comparable API is provided by web browsers)
that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback
function and a delay in milliseconds.

*/



console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('my first timing function delayed 3 seconds');
};
// time out function - first takes the call back function ( usingSTO ), then the delay parameter for 3000ms
setTimeout(usingSTO, 3000);







// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");


/*  observations: the first line of console will run paired with the usingSTO function since its an asynchronous
then it will delay 3000ms and continue to the other console log */
