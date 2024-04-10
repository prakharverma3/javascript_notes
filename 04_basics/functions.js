function sayMyname() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyname();

// function addTwoNumber (number1 , number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(5, 7) ;


function addTwoNumber (number1 , number2){

    result = (number1 + number2);
    return result;

}


function calculateCArtPrice(...num1){                       // rest operator
    return num1
}



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));