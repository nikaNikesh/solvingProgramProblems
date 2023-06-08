/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     var counter = 0;
//     var swap;
//     for (var i = 0; i < nums.length - 1; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 counter += 1;
//                 swap = nums[j];
//                 nums[j] = nums[j + 1];
//                 nums[j + 1] = swap;
//
//             }
//
//         }
//     }
//     return counter;
// };
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

var removeDuplicates = function (nums) {

    var left = 0;
    var right = 0;

    while (left < nums.length) {
        console.log(nums[left]);
        while (nums[left] === nums[right]) {
            right++;
        }
        left = right;
    }
};

var removeDuplicates2 = function (nums) {

   for (var left = 0, right = 0; left < nums.length; left = right) {
        console.log(nums[left]);
        for (; nums[left] === nums[right]; right++) {
        }
    }
};

removeDuplicates2([0,0,1,1,1,2,2,3,3,4]);
console.log("----------------")
removeDuplicates2       ([1, 2, 3, 4, 5])