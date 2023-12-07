var removeDuplicates = function (nums) {
    let arrayRemovedDuplicates = [...new Set(nums)];
    nums.splice(0, nums.length, ...arrayRemovedDuplicates);

    return nums.length;
};

const teste = removeDuplicates([1, 1, 2, 3, 4, 4, 2]);
console.log(teste);