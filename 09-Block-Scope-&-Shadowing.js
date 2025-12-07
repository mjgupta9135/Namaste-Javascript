/**
 * ! What is Block Scope?  h
 * * A Block is defined by  a pair of curly brackets `{}`. It is what all variables,functions,we can access inside a block.
 */
{
  var a = 10;
  let b = 20;
  const c = 30;
}
{
  var a1 = 20;
  let b1 = 30;
  const c1 = 40;
}
/**
 * ! From line no 5 to 9
 * * In Above line  code let and const are store in block space but var is stored in global space.
 * * So b and c are hoisted in block and a is hoisted in global EC
 * ! From line no 10 to 15
 * * When the flow control moves from line no 9 to 10 variable a1 will be stored in global space.
 * * But variable b and c will be removed from Block Space and variable b1 and c1 will be hoisted in block space.
 * todo: SO we can say that  let and const are block scoped and var is global scoped.
 * todo: we cannot access let and const outside block  scope but we can access var from anywhere because it is global scoped.
 */

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
// It will print 10 20 30 10 and refrenceError  for b and next line will not executed.

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
// In above example we can see that value of 10 was overwritted i.e var a inside block scope shadowed var a outside block

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// We can see 10 twice because var is present only in global scope and value in global scope persists even after block ends so value 10 remains

//Lets  see what happens when we use let and const case
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);
/**
 * * It will give output 10 20 30 100
 * * We can say that let inside block and outside  block are two different memory locations unlike var.
 * * Here b outside block scope is stored in script space
 * * Varible b and c  inside block are stored in block scope
 * * Variable a is stored in global space.
 * * All three in separate memory space.
 * ! b in block memory space shadows b present in script memory space
 * ! As soon as block ends,Block memory space is erased hence b and c inside block also get removed,thus the let inside script is used to log or print the value of b
 * ! Const behaviour is same as let
 */

//Now we will see shadowing through function scope
const c = 100;
function func() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
func();
console.log(c);
/**
 * * Output will be 10 20 30 100
 * * In this code snippit const and let inside function are store into local scope of that function
 * * c outside  function is stored in script space;
 * * When the local environment of funtion is removed, and only script and global space remain
 */

//One Experiment with var

var a = 20;
function x() {
  var a = 10;
  console.log(a);
}
x();
console.log(a);
/**
 * * It will give output  10 20
 * * Surprising isn't it?
 * * Because when we used block instead of function both outputs were supposed to be 10. That was because var was global scoped
 * * But here var is function scoped as well as global scoped , which means Local space of function will have separate copy of a unlike in blocks 
 * * where there was only global space. Here there is local environment of function and Global space both due to usage of functions.
 * * Both the var variables have been hoisted in their respective memory areas.
 * * On logging inside function , it will print 10 because it is printing the local copy of a.
 * * After function  call is over, local environment of function is removed and only global space remains.
 * * Hence when we log a outside function, it will print 20 because it is printing the global copy.

 * * Shadowing in JS refers to the practice where a variable is declared within a certain scope , and it has the same name as a variable declared in an outer scope.
 * * When this happens the inner variable shadows outer varible meaning inner varible take precedence  over outer variable.
 * * When a variable is shodowed the outer variable is still accessible outside block or function where shadowing occurs.
 */

/**
 * ! What is Illegal Shadowing?
 * * Illegal shadowing occurs in JavaScript when a variable declared with let or const in a block scope attempts to shadow a variable declared with var in the same or an outer scope.
 */

var a = 20;
{
  var a = 20;
}

//We can do this

let a = 30;
{
  var a = 20;
}

//we cannot do this . This is illegal shadowing We can shadow let using let but cannot let using var

let a = 20;
function demo() {
  var a = 30;
  console.log(a);
}
demo();
console.log(a);

// it gives no error because anyone can shadow anyone inside function. as let,var,const all are function scoped.
