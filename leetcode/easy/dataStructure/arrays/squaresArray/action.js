/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var sortedSquares = function (nums) {
    var square = [];
    var i = 0;
    while (i < nums.length) {
        square.push(nums[i] * nums[i]);
        i++;
    }

return square;
};
console.log(sortedSquares([-4,-1,0,3,10]))*/

var sortedSquares = function (nums) {
    var squareArray = [];
    var i = 0;

    while (i < nums.length) {
        if (nums[i] >= 0) {
            //squareArray.push(nums[i] * nums[i]);
            break;
        }
        i++;
    }

    var j = i - 1;
    var k = i;
    while (j >= 0 && k < nums.length) {
        if (nums[j] * nums[j] < nums[k] * nums[k]) {
            squareArray.push(nums[j] * nums[j]);
            j--;
        } else {
          squareArray.push(nums[k] * nums[k]);
          k++;
        }

    }

    while (j >= 0) {
        squareArray.push(nums[j] * nums[j]);
        j--;
    }

    while (k < nums.length) {
         squareArray.push(nums[k] * nums[k]);
         k++;
    }

return squareArray;
}

// console.log(sortedSquares([-4,-1,0,3,10]));
// console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-2,-2,-1]));

