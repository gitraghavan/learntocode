console.log ('JavaScript Hoisting - Example scripts loaded');

// console.log (hoistingC); // breaks the application and throws a reference error
// Defaults to let or const, no specific declaration is provided
hoistingC = 20;
console.log (hoistingC);

// Variable hoisted and returns value as 20. In the event if a is undefined above, returns undefined
// If the vaialbe is declared by const or let, ReferenceError: is returned
console.log (hoistingA);
// console.log (hoistingB); // breaks the application and throws a reference error

helloFun ();
// helloCon (); // breaks the application and throws a reference error
localScopeHoisting ();

// console.log (hoistingObjConst.a); // breaks the application and throws a reference error
// console.log (hoistingObjConst.b); // breaks the application and throws a reference error

// Declarations - Examples of Hoisting in JS
// Variable Hoisting
var hoistingA = 10;
const hoistingB = 10;

// Function Hoisting
function helloFun () {
    console.log ('Hello World ! using function keyword before ES6');
};
const helloCon = () => {
    console.log ('Hello World ! using const function expression after ES6');
}

// Local Scope Hoisting
function localScopeHoisting () {
    x = 10;
    console.log (x);
    var x;
};

// Advanced Hoisting concepts
const hoistingObjConst = {
    a: 10,
    b: (function () {
        console.log ('Anonymous function !');
    })
}
hoistingObjConst.b ();
