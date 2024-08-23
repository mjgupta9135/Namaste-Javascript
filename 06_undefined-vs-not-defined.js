/*
Undefined in JS is like a placeholder  for a variable untill the variable is assigned a value.
It is automatically assigned to variables that have been declared but not yet assigned a value.
*/

console.log(x);
var x = 5;
let y;
console.log(y);
/*
-----In First Console ----
It will print undefined because we print the variable before initialization.
From Hosting it will be declared and assigned undefined.

-----In Second Console-----
It will print undefined because we print the variable before initialization.
*/

/*
When something is "not defined" in JS that means you are trying to access a variable or function that hasn't been declared or is out of scope.
This usually results a refrence error
*/

console.log(d);
getName();
/*
This will give  a reference error because d is not declared and getName is not a function in this scope.
So we can say that if a variable is declared in scope but not initialized before used it will results undefines 
But when the variable is not declared in that scope then it will give refrence error as not defined
*/
