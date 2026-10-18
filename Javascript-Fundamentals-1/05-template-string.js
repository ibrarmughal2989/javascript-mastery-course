// Template String 

// I don't like this way beacuase its very long way to write any kind of string we used lot of addition operator


let goodName = "ali";
let job = "web developer";
let intro = "my name is " + goodName + " and my job is " + job;
console.log(intro);


// This way is good and new way modern way to write strings in concat order we can use variable like place holders

let modernIntro = `my name is ${goodName} and my job is ${job}`;
console.log(modernIntro);

// output : my name is ali and my job is web developer


