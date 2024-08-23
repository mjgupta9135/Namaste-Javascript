var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
/*
Lets analyze the code exection of above code snippit
In Memory Creation phase , the memory is allocated for the variables x, a and b
In Execution phase , the function a is called first and E1 is created for a
In function a , the variable x is declared and assigned the value 10
In function a , the console.log(x) is executed and the value 10 is printed and E1  is popped from the call stack
In Execution phase , the function b is called and E2 is created for b
In function b , the variable x is declared and assigned the value 100 and E2  is popped from the call stack
In function b , the console.log(x) is executed and the value 100 is printed
Then at last  the console.log(x) is executed and the value 1 is printed


Imp Point:- When we console.log(x) inside function a and b it will search local value of x not the global value
In global memory  , the value of x is 1 but in local memory  of function a and b the value of x is 10 and 100 respectively

*/
