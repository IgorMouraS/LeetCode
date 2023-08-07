var map = function (arr, fn) {
    let array = [];
    let returnedArray = array.concat(arr);

    for (i in returnedArray) {
        returnedArray[i] = fn(array[i], i);
    }

    function fn(n, i) {
        if (i === null) {
            return n + 1;
        } else {
            return n + i;
        }
    
    }
};


let result = map([2, 1, 3], 1);
console.log(result);