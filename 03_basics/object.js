// two ways  to do it
// literals and contructors
// singleton  => apne yarah ka ek hi object hota hai
/// literals ke tarah declare krte hai to singleton nhi bna hai pr agr constructor se krta hai to singleton hi bnata hai



const mySym = Symbol("key1")

// Object.create  // contrustor method


const jsUser = {
    name: "hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym]: "mykey1",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedin : false,
    lastloginday : ["monday", "saturday"]
}

console.log(jsUser.age);
console.log(jsUser["age"]);

console.log(jsUser["full name"]);    // can't access in this way console.log(jsUser.full name);

// console.log(jsUser.mySym);             // can't access 
// console.log(typeof(jsUser.mySym));

console.log(jsUser[mySym]);   // accessing symbol property using symbole variable

jsUser.email = "love@gmail.com"
// Object.freeze(jsUser)     // once freezed we cannot change the value of any property of object

jsUser.email = "love@yahoooooo.com"

console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);               // changing string to back tick is known as string interpulation
}

console.log(jsUser.greetingTwo());