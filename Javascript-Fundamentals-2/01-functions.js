// Function declarations 


// Basic Function 
function addTwoNumbers(){
    console.log(8+4);
}

// addTwoNumbers();

// Function Expression 

const addTwoNumbersExpression = function (){
    console.log(5 + 1);
}

// addTwoNumbersExpression();

// Arrow Functions 

const addTwoNumbersArrow = ()=>{
    console.log( 7 + 7);
}

// addTwoNumbersArrow();

const woodMaterial = (material)=>{
    return material * 4;
}

const woodItem = (item1,item2)=>{
    const items1  = woodMaterial(item1);
    const items2 = woodMaterial(item2);
    const finalItem = `your ${items1} white oak table and ${items2} walnut table is ready to ship `
    return finalItem;
}

// console.log(woodItem);
const woodShips = woodItem(3,6)
console.log(woodShips)