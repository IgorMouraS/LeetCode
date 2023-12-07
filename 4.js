var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let somaNum1 = arraySome(nums1);
    let somaNum2 = arraySome(nums2);
    let somaArrays = somaNum1 + somaNum2;
    let divisor = m + n;

    let result = somaArrays / divisor;

    return result;
};

function arraySome(array){
    let soma = 0;

    for(i = 0; array.length > i; i++){
        soma += array[i];
    }

    return soma;
}