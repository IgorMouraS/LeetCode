let createCounter = function(init) {
    let valor = init;
    let obj = {};

    let increment = () => ++valor;
    let decrement = () => --valor;
    let reset = () => valor = init;

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