// in this lecture we will learn how to use type conversion and why we use type conversion 


let age = "25";

console.log(age);        // "25"
console.log(typeof age); // string

// Convert string into number
let newAge = Number(age);

// we convert sucessfully string into number using number method ;

console.log(newAge);        // 25
console.log(typeof newAge); // number

// we have three type of type conversion in javascript 

Number()       // convert value into number ;
String()	// convert value into string ;
Boolean()	// convert value into boolean ;

// ---------------------   String to number  --------------------------

const price = "100";
const quantity = "3";

console.log(price + quantity);

// "1003" (String concatenation)



// Convert into numbers
const total = Number(price) * Number(quantity);

console.log(total); // 300

console.log(Number("50"));     // 50
console.log(Number("10.5"));   // 10.5
console.log(Number("Hello"));  // NaN
console.log(Number("25abc"));  // NaN
console.log(Number(""));       // 0
console.log(Number("  "));     // 0
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number(null));     // 0
console.log(Number(undefined)); // NaN


// ---------------- Number To String ----------------------

const dummyAge = 25;

console.log(typeof dummyAge); // number

const convertedAge = String(dummyAge);

console.log(convertedAge);        // "25"
console.log(typeof convertedAge); // string


// Real life example 

const productId = 12345;

const message = "Product ID: " + String(productId);

console.log(message);

// "Product ID: 12345"


// -------------------------- Boolean Conversion ---------------------

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false