let createCounter = function(init) {
    let valor = init;
    let obj = {};

    let increment = function(){
        return ++valor;
    }

    let decrement = function(){
        return --valor;
    }

    let reset = function(){
        valor = init;
        return valor;
    }

    return obj = {increment, decrement, reset};
};

const counter = createCounter(5)
const counterIncrement = counter.increment(); // 6
const counterIncrement2 = counter.increment();
console.log(counterIncrement2);
const counterReset = counter.reset(); // 5
console.log(counterReset);
const counterDecrement = counter.decrement(); // 4
console.log(counterDecrement);