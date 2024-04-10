// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
console.log(`DB CONNECTED`);
})();

( (name) => {
console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// global scope ke pollution hatane ke liye iife use krte hai

//iife function ko ending ka pta nhi hota to uske termination ke liye semicolon ka use krna hota
