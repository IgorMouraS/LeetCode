//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
let args = [];

var createHelloWorld = function(){ //anonymous function, create a variable and pass a function without name
    return function(...args){
        const output = "Hello World";
        console.log(output);
        return output;
    }
}

const f = createHelloWorld();
f();