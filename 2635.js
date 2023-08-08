let map = function (arr, fn) {

    let returnedArray = arr;
    
    for (let i = 0; i < arr.length; i++) {

        returnedArray[i] = fn(arr[i], i);  

    };
    
    return returnedArray;
};


let result = map([1,2,3], function constant() { return 42; });
console.log(result);