let filter = function(arr, fn) {
    let filteredArr = [];

    for(const i in arr){

        if(fn(arr[i], Number(i))){
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
    //return arr.filter((a, i)=>fn(a, i));
};

let teste = filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 });
console.log(teste);