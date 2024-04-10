//array

const myarray =  [0,1,2,3,4,5,true,"hitesh"]

const myheros = ["shaktiman" , "naagraj"]

const myarr2 = new Array(1,2,3,5,5,7)

myarray.push(9)
console.log("Array after push : ",myarray);

//pop method is used to remove the last element from an array
myarray.pop()
console.log("Array after pop : ",myarray);

//shift method is used to remove the first element of an array
myarray.shift()
console.log("Array after shift : ",myarray);

//unshift method is used to add elements at the beginning of an array
myarray.unshift(-1)
console.log("Array after unshift : ",myarray);

console.log(myarray.includes(6)); //returns tru or false
console.log(myarray.indexOf(8));   // returns index of that value if it exists otherwise -1

const newArr = myarray.join()   // prints in the form of string as it converts it to string datatype


// slice , splice

console.log("a" , myarray);

const myn1 = myarray.slice(2,4)    //it will take values starting from index 2 till before index 4 i.e., [2,3]
console.log(myn1);
console.log("b" , myarray);

const myn2 = myarray.splice(2,4)    //it removes four elements from the original array starting from index 2 and return those removed elements
console.log(myn2);
console.log("c"  , myarray);



// second part

const marvelHero = ['thor' , 'íronman', 'spiderman'] ;

const dcHero = [ 'superman' , 'batman', 'flash'];

marvelHero.push(dcHero);
console.log('Marvel heroes with DC Heroes: ', marvelHero );

const allhero = marvelHero.concat(dcHero);
console.log('Concatination of Marvel and Dc heroes: ', allhero ) 

const allNEwHero = [...marvelHero, ...dcHero];      // spread operator  can be used for adding multiple arrays into one array
console.log(allNEwHero);

const anotherarray = [1,2,3,[4,5,60],7,[4,9,[8,5]]];

const realAnotherarray = anotherarray.flat(Infinity)
console.log(realAnotherarray);

console.log(Array.isArray("hitexh")); //  return true or false
console.log(Array.from("hitexh")); // convert any iterable object into array    

console.log(Array.from({
    name: "john"
}));                                            // interseting case


let score1 =100;
let score2 =200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //  create an array from the arguments passed to it

let teamScore=[score1,score2,score3]
console.log(`Team Score is ${teamScore}`)   // using template literals for string interpolation


