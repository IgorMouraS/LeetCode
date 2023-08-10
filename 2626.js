var reduce = function(nums, fn, init) {
    let reduced = [];

    if(nums.length === 0){
        return reduced = init;
    }
    
    for(let i = 0;  i < nums.length; i++){
        init = fn(init, nums[i]);
    }

    
    return reduced = init;
};

let result = reduce([], function sum(accum, curr) { return accum + curr; }, 25);
console.log(result);