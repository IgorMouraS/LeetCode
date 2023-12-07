var removeDuplicates = function(nums) {

    if(nums.length <= 2){
        return nums.length;
    }

    let pos = 2; 

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[pos - 2]) {
            nums[pos++] = nums[i];
        }
    }

    nums.length = pos;
    return pos;
};

const teste = removeDuplicates([1,3, 3,1,2,2,3]);
console.log(teste);