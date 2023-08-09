let map = function (arr, fn) {
    let returnedArray = [];
    
    for (const i in arr) {
        returnedArray.push(fn(arr[i], Number(i)));  
    };
    
    return returnedArray;
    //return arr.map(fn);
};


let result = map([1,2,3], function plusI(n, i) { return n + i; });
console.log(result);