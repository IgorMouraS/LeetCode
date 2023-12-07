let merge = function (nums1, m, nums2, n) {
    let [i, j, k] = [calculateLength(m), calculateLength(n), calculateLength(m, n)]

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
};

function calculateLength(num1, num2) {
    return num2 ? num1 + num2 - 1 : num1 - 1;
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);