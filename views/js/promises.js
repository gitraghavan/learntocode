console.log ('JavaScript Promises - Example scripts loaded');

// Basic Promise 
// This method holds a promise constructor where we are checking if the window object exist or not
// If window object is found returns a resolved state, If window object is not available returns a rejected state
// On Success the first argument (Success callback function) of the then method on basicPromise gets executed,
	// in the event of failure the second argument (Failure callback function) is executed
// For testing the reject state, add an additional unknown property to window object eg: window.a
const basicPromise = new Promise ((resolve, reject) => window ? resolve ('Success') : reject ('Failure'));
basicPromise.then ((str) => console.log (str), (err) => console.log (err));

// Multiple promise
const promise1 = Promise.resolve (3);
const promise2 = 42;
const promise3 = new Promise ((resolve, reject) => {
	setTimeout (resolve, 3000, 'test');
});

Promise.all ([promise1, promise2, promise3]).then ((values) => {
	console.log (values);
});