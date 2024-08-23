//Lets Take an example of code and we will figure out how js code will be executed
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

/*
At first Global Execution context is created.
Global Execution context is the default or base context in which code is executed.
It represents the global environment where all code runs outside of any function or block.
As We know it has two components one is memory component other is code component.
So There are two phases involved
1.Memory Creation ----> In this phase JS allocates memory for the variables and functions and stores undefined as a placeholder for the variables and in case of functions it stores the whole code.
2.Code Execution  ----> In code execution context all value of variable is allocated and if it counters any function statement then it will do nothing and 
                        if it will counter any function call then a new execution context is created specially for that function and it will have two components as global component again do all things and execute all code inside function.
                        if it counter any return statement then it return the control  of program to where this function is invoked and back to global execution.

After all code execution, execution context is popped off or deleted
*/

/*
Now We analyze above code
In first global execution context is created
Then JS Allocates memory to all function and variable to undefined as placeholder
Then in code execution it will allocate n=2
and in function invokation line i.e 
var square2=square(n);   
In this line a new execution context is created specific  for this function 
and all operation will again done by JS like memory creation and in code execution part all code is executed.
After return statement it will return square of 2 i.e 4 to variable square2 and flow control of function will come back to global execution context.
Now Again all things done for square4 function call similarly to above function call
In Last after all code will be executed global execution context will be popped off or deleted.
*/
