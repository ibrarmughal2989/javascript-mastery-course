
/*
============================================================
              JAVASCRIPT OPERATORS
             COMPLETE BEGINNER GUIDE
============================================================

WHAT IS AN OPERATOR?

An operator is a special symbol used to perform an
operation on one or more values (operands).

Example:
let a = 10;
let b = 5;
console.log(a + b); // 15

Here:
10 and 5 are values.
+ is the addition operator.

TOPICS:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment and Decrement Operators
6. String Operators
7. Ternary Operator
8. Type Operators
9. Nullish Coalescing Operator
10. Optional Chaining Operator
11. Logical Assignment Operators
12. Bitwise Operators
13. Other Useful Operators
14. Operator Precedence
15. Practical Shopping Cart Example

============================================================
*/

// ==========================================================
// 1. ARITHMETIC OPERATORS
// ==========================================================

// PURPOSE:
// Arithmetic operators perform mathematical calculations.
//
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Exponentiation (power)

{
  let a = 10;
  let b = 3;

  console.log(a + b);  // 13
  console.log(a - b);  // 7
  console.log(a * b);  // 30
  console.log(a / b);  // 3.333...
  console.log(a % b);  // 1
  console.log(a ** b); // 1000

  // Modulus returns the remainder after division.
  // 10 / 3 leaves a remainder of 1.

  // Exponentiation:
  // 10 ** 3 means 10 * 10 * 10 = 1000.
}

// ==========================================================
// 2. ASSIGNMENT OPERATORS
// ==========================================================

// PURPOSE:
// Assignment operators assign or update variable values.
//
// =    Assign
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign
// %=   Modulus and assign
// **=  Exponentiate and assign

{
  let x = 10;

  x += 5; // x = x + 5
  console.log(x); // 15

  x -= 3; // x = x - 3
  console.log(x); // 12

  x *= 2; // x = x * 2
  console.log(x); // 24

  x /= 4; // x = x / 4
  console.log(x); // 6

  x %= 4; // x = x % 4
  console.log(x); // 2

  x **= 3; // x = x ** 3
  console.log(x); // 8
}

// ==========================================================
// 3. COMPARISON OPERATORS
// ==========================================================

// PURPOSE:
// Comparison operators compare values and return
// a boolean result: true or false.
//
// ==   Loose equality
// ===  Strict equality
// !=   Loose inequality
// !==  Strict inequality
// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to

{
  console.log(5 == "5");   // true
  console.log(5 === "5");  // false
  console.log(5 != "5");   // false
  console.log(5 !== "5");  // true

  console.log(10 > 5);     // true
  console.log(10 < 5);     // false
  console.log(10 >= 10);   // true
  console.log(5 <= 10);    // true

  // == can convert types before comparison.
  // === checks equality without converting types.

  // Recommended: Prefer === and !==.
}

// ==========================================================
// 4. LOGICAL OPERATORS
// ==========================================================

// PURPOSE:
// Logical operators combine or reverse conditions.
//
// &&  Logical AND
// ||  Logical OR
// !   Logical NOT

{
  let age = 20;
  let hasID = true;

  // AND: Both conditions must be truthy.
  console.log(age >= 18 && hasID); // true

  // OR: At least one condition must be truthy.
  console.log(age < 18 || hasID); // true

  // NOT: Reverses the truthiness of a value.
  console.log(!hasID); // false

  // && and || do not always return booleans.
  console.log("Hello" && "World"); // "World"
  console.log("" || "Guest");      // "Guest"
}

// ==========================================================
// 5. INCREMENT AND DECREMENT OPERATORS
// ==========================================================

// PURPOSE:
// Increase or decrease a variable by one.
//
// ++  Increment
// --  Decrement

{
  let count = 5;

  count++;
  console.log(count); // 6

  count--;
  console.log(count); // 5

  // Post-increment: Returns the old value first.
  let a = 5;
  console.log(a++); // 5
  console.log(a);   // 6

  // Pre-increment: Returns the updated value.
  let b = 5;
  console.log(++b); // 6

  // Post-decrement:
  let c = 5;
  console.log(c--); // 5
  console.log(c);   // 4

  // Pre-decrement:
  let d = 5;
  console.log(--d); // 4
}

// ==========================================================
// 6. STRING OPERATORS
// ==========================================================

// PURPOSE:
// Join strings together using + or +=.

{
  let firstName = "Ali";
  let lastName = "Khan";

  let fullName = firstName + " " + lastName;
  console.log(fullName); // "Ali Khan"

  let message = "Hello";
  message += " World";

  console.log(message); // "Hello World"

  // Numeric addition vs string concatenation:
  console.log(10 + 5);   // 15
  console.log("10" + 5); // "105"
}

// ==========================================================
// 7. TERNARY OPERATOR (? :)
// ==========================================================

// PURPOSE:
// A shorter alternative to a simple if/else statement.
//
// SYNTAX:
// condition ? valueIfTrue : valueIfFalse

{
  let age = 20;

  let status = age >= 18 ? "Adult" : "Minor";
  console.log(status); // "Adult"

  let marks = 75;

  let result = marks >= 50 ? "Pass" : "Fail";
  console.log(result); // "Pass"
}

// ==========================================================
// 8. TYPE OPERATORS
// ==========================================================

// PURPOSE:
// Check data types or object relationships.
//
// typeof      Returns the type of a value.
// instanceof  Checks an object's prototype chain.

{
  console.log(typeof 100);       // "number"
  console.log(typeof "Hello");   // "string"
  console.log(typeof true);      // "boolean"
  console.log(typeof undefined); // "undefined"
  console.log(typeof 10n);       // "bigint"
  console.log(typeof Symbol("id")); // "symbol"

  // Historical JavaScript behavior:
  console.log(typeof null); // "object"

  let fruits = ["Apple", "Mango"];

  console.log(fruits instanceof Array); // true

  // Recommended way to check arrays:
  console.log(Array.isArray(fruits)); // true
}

// ==========================================================
// 9. NULLISH COALESCING OPERATOR (??)
// ==========================================================

// PURPOSE:
// Provide a default value only when the original value
// is null or undefined.

{
  let username = null;

  let name = username ?? "Guest";
  console.log(name); // "Guest"

  let score = 0;

  console.log(score ?? 100); // 0
  console.log(score || 100); // 100

  // ?? preserves 0, false, and empty strings.
}

// ==========================================================
// 10. OPTIONAL CHAINING OPERATOR (?.)
// ==========================================================

// PURPOSE:
// Safely access a property or method when an intermediate
// value might be null or undefined.

{
  let user = {
    name: "Ali",
    address: {
      city: "Toronto"
    }
  };

  console.log(user.address?.city); // "Toronto"

  // Missing property:
  console.log(user.profile?.age); // undefined

  // Without optional chaining, attempting to access
  // user.profile.age would throw a TypeError.
}

// ==========================================================
// 11. LOGICAL ASSIGNMENT OPERATORS
// ==========================================================

// PURPOSE:
// Combine logical operations with assignment.
//
// ||=  Assign when the existing value is falsy.
// ??=  Assign when the value is null or undefined.
// &&=  Assign when the existing value is truthy.

{
  let name = "";

  name ||= "Guest";
  console.log(name); // "Guest"

  let score = 0;

  score ??= 100;
  console.log(score); // 0

  let isReady = true;

  isReady &&= false;
  console.log(isReady); // false
}

// ==========================================================
// 12. BITWISE OPERATORS
// ==========================================================

// PURPOSE:
// Perform operations on the binary bits of numbers.
//
// &    Bitwise AND
// |    Bitwise OR
// ^    Bitwise XOR
// ~    Bitwise NOT
// <<   Left shift
// >>   Signed right shift
// >>>  Unsigned right shift

{
  console.log(5 & 3);   // 1
  console.log(5 | 3);   // 7
  console.log(5 ^ 3);   // 6
  console.log(~5);      // -6
  console.log(5 << 1);  // 10
  console.log(5 >> 1);  // 2
  console.log(5 >>> 1); // 2

  // These are more advanced operators.
  // They are less common in everyday beginner code.
}

// ==========================================================
// 13. OTHER USEFUL OPERATORS
// ==========================================================

{
  // IN OPERATOR:
  // Checks whether a property exists in an object.

  let person = {
    name: "Ali",
    age: 20
  };

  console.log("name" in person); // true

  // DELETE OPERATOR:
  // Removes a property from an object.

  delete person.age;
  console.log(person); // { name: "Ali" }

  // VOID OPERATOR:
  // Evaluates an expression and returns undefined.

  console.log(void 0); // undefined

  // COMMA OPERATOR:
  // Evaluates expressions left to right and returns
  // the value of the final expression.

  let result = (1 + 2, 3 + 4);
  console.log(result); // 7
}

// ==========================================================
// 14. OPERATOR PRECEDENCE
// ==========================================================

// PURPOSE:
// Determines the order in which operators are evaluated.
//
// Parentheses can be used to control evaluation order.

{
  console.log(10 + 5 * 2);   // 20
  console.log((10 + 5) * 2); // 30
  console.log(2 ** 3 * 2);   // 16

  // Multiplication has higher precedence than addition.
  // Parentheses change the evaluation order.
}

// ==========================================================
// 15. PRACTICAL EXAMPLE: SHOPPING CART
// ==========================================================

// This example combines arithmetic, assignment,
// comparison, and ternary operators.

{
  let price = 500;
  let quantity = 3;
  let discount = 100;

  // Calculate the total price.
  let total = price * quantity;

  // Apply the discount.
  total -= discount;

  // Check free shipping eligibility.
  let freeShipping = total >= 1000;

  // Choose a message based on the condition.
  let shippingMessage = freeShipping
    ? "Free Shipping"
    : "Shipping Charges Apply";

  console.log("Total:", total); // Total: 1400
  console.log(shippingMessage);  // Free Shipping
}

/*
============================================================
                    KEY TAKEAWAYS
============================================================

Arithmetic:       + - * / % **
Assignment:       = += -= *= /= %= **=
Comparison:       == === != !== > < >= <=
Logical:          && || !
Increment:        ++
Decrement:        --
String:           + +=
Ternary:          ? :
Type:             typeof instanceof
Nullish:          ??
Optional chaining: ?.
Logical assign:   ||= &&= ??=
Bitwise:          & | ^ ~ << >> >>>
Other:            in delete void comma

BEST PRACTICES:
1. Prefer === instead of ==.
2. Prefer !== instead of !=.
3. Use parentheses for clear calculations.
4. Use ?? when 0 or false should remain valid.
5. Use ?. for safe access to optional properties.
6. Practice arithmetic, comparison, and logical
   operators before learning advanced operators.

============================================================
                END OF JAVASCRIPT OPERATORS
============================================================
*/
