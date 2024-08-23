/*
Hoisting
Hoisting is phenomenon in JS by which you can access these variables and function even before you have initialized or declared without facing any error.
Hoisting is phenomenon in JS which puts  the variable and function declarations at the top of the scope, but the assignment is done where it is initialized.
It only host declaration not initialization.
Reason:-
Execution context created in two phases i.e Memory Creation and Code Execution.
So even before code execution memory is allocated to variable environment also called memory component.
So in case of variable ,its value will be initialized as undefined  and in case of function its value will be initialized as function definition.
So Thus  we can access variable and function even before we have initialized or declared without facing any error.
*/

console.log(x);
getName();
console.log(getName);
var x = 7;
function getName() {
  console.log("Hello");
}

/*
Lets analyze this code
1. console.log(x); // undefined
2. getName(); // Hello
3. code of getName 
so here we can see that we can use variable and function  even before we have initialized or declared without facing any error.
if we print the function then we will get  the function definition.
*/

// Lets do this with arrow function
console.log(getMarks);
// getMarks(); //Here we will get error because here getMarks is act as variable not function.
var getMarks = () => {
  return 90;
};

/*
In above case during memory creation phase getMarks marked as undefined it will not get full code of function
In Code execution  phase it will get full code of function and then it will throw error because here getMarks is variable.
*/

//Above all conditons will be applied on the variable declared with var
//For Let and Const  it will be different
/*
Variables defined with let and const are hoisted on the top of block but not initialized 
That means the block of code are aware of variable ,but it cannot be used untill it has been declared.
if we try to use  variable before it has been declared then it will throw refrenceerror.
The time from let and const variable are hosted at top to  the point where they are declared is called temporal dead zone.
*/

console.log(y);
let y = 10;
//Here Refrence Error will be thrown because y is in temporal dead zone.
