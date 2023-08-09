var reduce = function(nums, fn, init) {
    let val = 0;
    let reduced = {init, val};

    if(nums.length === 0){
        return init;
    }

    for(const i in nums){
        val = fn(init, nums[i]);
    }
    
    return reduced;
};

let result = reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0);
console.log(result);