export const mergeSort = function(nums1, m, nums2, n) {
    let total = m+n
    m--, n--
    for(let j=total-1;j>-1;j--){
        if(n>-1 && nums2[n]>nums1[m] || m<0){
            nums1[j] = nums2[n]
            n--
        } else {
            nums1[j] = nums1[m]
            m--
        }
    }
    return nums1
};
