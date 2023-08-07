let map = function (arr, fn) {
    let array = [];
    let returnedArray = array.concat(arr);

    for (let i = 0; i < returnedArray.length; i++) {
        if(fn = plusone(n)){
            returnedArray[i] = returnedArray[i] + 1;
        }else if(plusI(n, i)){
            returnedArray[i] = returnedArray[i] + i;
        }else{
            returnedArray[i] = 42;
        }
    };
    return returnedArray;

};


let result = map([2, 1, 3], 1);
console.log(result);