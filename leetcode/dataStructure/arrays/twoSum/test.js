// module.exports = function () {
//     let twoSum = function (nums, target) {
//
//         for (var i = 0; i < nums.length - 1; i++) {
//             console.log("i : " + i);
//             for (var j = i + 1; j < nums.length; j++) {
//                 var sumCurrentElements = nums[i] + nums[j];
//                 console.log("current sum: " + sumCurrentElements);
//                 if (sumCurrentElements === target) {
//                     console.log('resault: i=' + i + ', j=' + j);
//                     var number = [];
//                     number[0] = i;
//                     number[1] = j;
//                 }
//
//             }
//         }
//         return number;
//     };
// };


export function twoSum(nums, target) {

    for (var i = 0; i < nums.length - 1; i++) {
        console.log("i : " + i);
        for (var j = i + 1; j < nums.length; j++) {
            var sumCurrentElements = nums[i] + nums[j];
            console.log("current sum: " + sumCurrentElements);
            if (sumCurrentElements === target) {
                console.log('resault: i=' + i + ', j=' + j);
                var number = [];
                number[0] = i;
                number[1] = j;
            }

        }
    }
    return number;
};