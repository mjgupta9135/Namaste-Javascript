/**
 * ! What is Temporal Dead Zone?
 * * Temporal Dead Zone is a time from when any variable is  declared until it is initialized.
 * ! Are let and const hoisted?
 * * Yes let and const  are hoisted but they are not initialized until the execution point is reached.They are in temporal dead zone until initialization
 * * we cannot use let and const before initialization if we use then error will be thrown.
 * ! Difference B/W SyntaxError,RefrenceError,TypeError?
 * * Syntax Error --> Code is syntactically  incorrect
 * * Refrence Error --> Variable or Function is not decalred in scope
 * * Type Error  -> Type Error  is thrown when we try to perform an operation on a value of wrong type.[Calling a variable as function]
 */

console.log(x);
console.log(y);
var x = 10;
let y = 20;

/**
 * * First Console will print undefined because in case of var we can use it before  initialization
 * *  Second Console will print ReferenceError because in case of let and const we cannot use it before initialization
 * ! In above case variable x is  attached to global  scope because it is declared with var keyword.
 * ! In case of let and const they stored in separate memory  location and not attached to global scope.
 * ! After assigning  value to them they are attached to global scope.
 */

/**
 * ! We can redeclare var but not let and const.
 * ! We can reinitialized  var and let but  not const.
 */
