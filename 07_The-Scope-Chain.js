/**
 *  * Scope means where you can access a specific variable or function in our code.
 *  * So whenever execution context is created,a lexical environment is also created.
 *  * Lexical Environment=Local Memory+Refrence to Lexical Environment of its parent.
 *  * This means that  we can access variables and functions of parent scope from child scope.
 *   todo: Lets see an example
 */
function a() {
  console.log(b);
}
var b = 10;
a();

/**
 * * In above code , we are trying to access variable b from function a.
 * * It will not give error it will print the value of b
 * todo: Js will try to find if b exists in the local memory of function a. If it will get the value then it will direct print the value of b
 * todo: if not then JS will go to the lexical parent of function a i.e GEC and it will checks if it has value of b
 * todo: After finding value of b it will print the value of b.
 * ! IF JS will not find the value of b in GEC then it will throw an error i.e not defined(RefrenceError) because GEC has no any parent.
 */

function demo() {
  var x = 10;
  c();
  function c() {
    console.log(x);
    console.log(y);
  }
}
var y = 20;
demo();
/**
 * * In above code when demo function is invoked separate EC is created then inside demo  function c is invoked then it will fetch value of
 * * Then it will fetch value of x and y in local scope and if  it will not find then it will go to the lexical parent of c i.e demo function
 * * Then it will print the value of x and for y it will again go the lexical  parent of demo i.e global execution context and it will print the value of y.
 * Todo: When a new execution context is pushed onto call stack it holds a refrence to the lexical environment of its parent i.e EC's memory from where it was invoked.
 * ! We cannot access child variable and  function from parent scope
 */
