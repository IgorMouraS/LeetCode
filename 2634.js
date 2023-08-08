let filter = function(arr, fn) {
    let filteredArr = [];

    for(let i = 0; i < arr.length; i++){
        let result = fn(arr[i], i);

        if(result){
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};

let teste = filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 });
console.log(teste);