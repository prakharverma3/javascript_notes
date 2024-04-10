let mydate = new Date();

// console.log(mydate); 
// console.log(mydate.toString()); 
// console.log(typeof mydate); //object

// let myCreatedDAte = new Date(2023 , 0 , 23) // 23 january 2023
// console.log(myCreatedDAte.toDateString());

// let myCrDAte = new Date(2023 , 1 , 23 ,5 ,3) // jab hum moths single single likhte hai to vo zero as january leta hai
//                                              //  pr agr khud specify kro to vo 01 ko january leta hai
// console.log(myCrDAte.toLocaleString());


// let mrdate = new Date("2024-01-23");   // 23 jaunary 2024
// console.log(mrdate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Date.now()/1000); 

let newdate = new Date();
console.log(newdate.getDay);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDate());

`${newdate.getDate()} and the time is`

newdate.toLocaleString('default', { 
    weekday : "long",
    
})