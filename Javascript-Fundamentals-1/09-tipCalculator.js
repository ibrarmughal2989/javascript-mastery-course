const bill = 275;
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
console.log(`your bill is ${bill} and your tip is ${tip} and your total bill is ${bill + tip} `);
