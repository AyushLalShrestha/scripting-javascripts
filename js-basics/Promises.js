/*
Learn more from: 
https://javascript.info/async-await
*/

async function asyncFunction() {

  prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Result of Promise inside an async function"), 3000);
  });

  // Wait until the promise resolves
  // Can’t use await in regular functions
  var result = await prom;
  
  console.log(result);
  return "Result of the async function";

}


console.log("Before calling the async function");
var funcPromise = asyncFunction();
console.log("After calling the async function");
funcPromise.then((a) => { console.log(a) });
