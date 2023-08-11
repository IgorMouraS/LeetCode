let reduce = function(nums, fn, init) {
    
    for(let i = 0;  i < nums.length; i++){
        init = fn(init, nums[i]);
    }

    return init;
    //return nums.reduce((val, num) => fn(val,num), init);
};

let result = reduce([1, 2, 3, 4], function sum(accum, curr) { return 0; }, 0);
console.log(result);