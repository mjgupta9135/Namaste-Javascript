/*
Shortest Javascript program is an empty file.
-> In Case of empty file JS create Global Execution Context and pushed into stack
-> JS Engine also created something known as WINDOW.
-> Window is like a big object with lots of function  and properties.
-> These Functions and variables are created by  JS Engine into global space
-> The JS Engine also creates this. At global level this points to window object.

What is Global Space?
Ans:- Any code which is not inside any function is global space.Any variable we write in the global space gets attached to the global object window.
*/

var a = 1;
function c() {
  var b = 3;
}

/*
If we see in window  we will able to find variable a and function c but no able to find variable b because b is in functional scope 
and variable a and function c is in global space. 
In global space window ===this
*/
console.log(a);
console.log(window.a);
console.log(this.a);
/*
All three will give same answer
if we dont write anything before a then it will assume that a is in window object.
*/
console.log(b);
// In above case JS engine search for b in window object but b is not in window object so it will give refrence error b is not defines


// 1. Jab hum kisi **object ki property access karte hain**, jaise `window.x`, to hum object ke andar value dhoond rahe hote hain.
// 2. Agar wo property exist nahi karti, to JavaScript **error nahi deta**.
// 3. Balki us case me hume **undefined** return hota hai.
// 4. Error tab aata hai jab variable **kahin bhi declare hi nahi hota**, jaise `console.log(x)`.
// 5. Isliye object property missing ho → **undefined**, variable missing ho → **ReferenceError**.
