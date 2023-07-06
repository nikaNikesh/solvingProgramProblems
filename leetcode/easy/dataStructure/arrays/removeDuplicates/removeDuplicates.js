/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

/*    var left = 0;
    var right = 0;

    while (left < nums.length) {
        console.log(nums[left]);
        while (nums[left] === nums[right]) {
            right++;
        }
        left = right;
    }
};*/

var removeDuplicates2 = function (nums) {
    var swap;

   for (var left = 0, right = 0; left < nums.length; left = right) {
        console.log(nums[left]);
        for (; nums[left] === nums[right]; right++) {
            swap = nums[right + 1];
            nums[right] = swap;
        }
    }
   return nums;
};

console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));
// console.log("----------------")
// removeDuplicates2       ([1, 2, 3, 4, 5])