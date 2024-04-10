// const tinderUser = new Object()  // non singleton object

const tinderUser = {}  // non singleton object

tinderUser.id = "123ashb"
tinderUser.name = "sam"
tinderUser.isLoggedin = false

console.log(tinderUser);

const regularUser = {
    email : "kbdv@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"

        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = { obj1 , obj2} // we can say its the wrong way as both the objects didn't merged in this way 
                                     // its just that now an another object is storing two objects in it         
// another way 
obj3 = Object.assign({}, obj1 , obj2)  // in this the empty parathesis is showing the target  object i.e., where to add the properties 
                                        // in thi case which is obj3 where we are assigning the value

console.log(obj3 == obj1);      //false


obj3 = Object.assign(obj1 , obj2)
console.log(obj3 == obj1);       // true 
                                 // because the first place is for the object in which the merged objects store

// here we are passing the reference of obj1 and obj2 to a new object called obj3 // this will merge both objects and return a new 

console.log("Object.assign(obj1,obj2) ", Object.assign(obj1,obj2));   // merging two objects

const obj4 = {...obj1,...obj2};         // ES6 syntax for merging two object
console.log("ES6 Syntax ", obj4 );

// when values is returned from the database

const user= [
    {
        id : 1,
        email : "hf@gmail.com"
    },
    {
        id : 1,
        email : "hf@gmail.com"
    },
    {
        id : 1,
        email : "hf@gmail.com"
    },
]            // array ke andar bhot se objects

// map krke looop lga do display krne ke liye

// user[1].email

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));




// destructoring the values

const course = {
    csname : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor : inst} = course       // destructoring
console.log(inst);


// {
//     "name" : "hitehs",
//     "coursename" : " js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]
