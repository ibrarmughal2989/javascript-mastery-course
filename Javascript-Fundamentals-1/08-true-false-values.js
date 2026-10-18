// in this lecture we will learn what is truthy falsy value why we used 

// javascript has 8 falsy values 

false	// Boolean false

0	// Zero number

-0	// Negative zero

0n	// BigInt zero

""	// Empty string

null	// Intentionally empty

undefined	// no one assign the value

NaN	// Not a Number

console.log(Boolean(0));         // false

console.log(Boolean(""));        // false

console.log(Boolean(null));      // false

console.log(Boolean(undefined)); // false

console.log(Boolean(NaN));       // false

console.log(Boolean(25));        // true

console.log(Boolean("Hello"));   // true

console.log(Boolean(-10));       // true

// Truthy Values In Javascript 

console.log(Boolean(100));       // true

console.log(Boolean(-5));        // true

console.log(Boolean("JavaScript")); // true

console.log(Boolean("0"));       // true

console.log(Boolean("false"));   // true

console.log(Boolean([]));        // true

console.log(Boolean({}));        // true