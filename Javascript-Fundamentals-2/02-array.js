// Basic array of friends 

const friends = ['peter','payam','justin','francy'];
console.log(friends[0]); // output    peter

// add value end of the  array 

friends.push("vick");
console.log(friends); //output [ 'peter', 'payam', 'justin', 'francy', 'vick' ]

// add value beginning in the array

friends.unshift("zack");
console.log(friends); // output [ 'zack', 'peter', 'payam', 'justin', 'francy', 'vick' ]

// delete value in the beginning of array 

friends.shift();
console.log(friends); // output ['peter', 'payam', 'justin', 'francy', 'vick' ]

// delete value end of the array 

friends.pop();
console.log(friends); // output [ 'peter', 'payam', 'justin', 'francy' ]

// check value exist in the array or no 

const v = friends.includes("francy");
console.log(v) // output true

// check length in of the array 
const checkLength = friends.length;
console.log(checkLength) // output 4

// takeout some piece of array value according your need 

const sliceValue = friends.slice(2,friends.length - 1);
console.log(sliceValue) // output justin










