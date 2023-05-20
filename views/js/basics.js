console.log ('JavaScript - Basics script loaded !');

// Not a Number when checked for equality returns false
const a = NaN;
const b = NaN;
a === b ? console.log ('Value true | Equals') : console.log ('Value false | Not Equals');

// Null values are equalled in this below example
const c = null;
const d = null;
c === d ? console.log ('Value true | Equals') : console.log ('Value false | Not Equals');

// Undefined values are equalled in this below example
const e = undefined;
const f = undefined;
e === f ? console.log ('Value true | Equals') : console.log ('Value false | Not Equals');

// Using this keyword. When referred globally (globalThis) or at a global level (this) returns the window object
console.log (this);
console.log (globalThis);

function thisFunc () {
    console.log (this);
}
thisFunc ();

var thisObjVar = {
    name: 'a',
    getName: function () {
        console.log (this.name);
    }
};
thisObjVar.getName ();

const thisObjConst = {
    name: 'a',
    getName: function () {
        console.log (this.name);
    }
};
thisObjConst.getName ();

const name = 'Window name'; // declared on a global level
const thisObjConstArrow = {
    name: 'a',
    getName: () => {
        console.log (this);
        console.log (this.name);
    }
};
thisObjConstArrow.getName.call ({ name: 'call method' });
