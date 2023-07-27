/*
1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

    A pair (i, j) is called good if nums[i] == nums[j] and i < j.



    Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
    Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
    Example 3:

Input: nums = [1,2,3]
Output: 0*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*let numIdenticalPairs = function(nums) {
    let pairs = new Map();
    let allPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        let value = 0;
        let pairsKey = nums[i];
        if (pairs.has(pairsKey)) {
            value = pairs.has(pairsKey) + 1;
            pairs.set(pairsKey, value);
        } else {
            pairs.set(pairsKey, value)
         }
        allPairs += value;
    }
return allPairs;
};
console.log(numIdenticalPairs([1,2,3,1,1,3])); //4
console.log(numIdenticalPairs([1,1,1,1])); //6
console.log(numIdenticalPairs([1,2,3])); //0*/

let numIdenticalPairs = function(nums) {
    let pairs = new Map();
    let allPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        let value = 0;
        pairs.set(nums[i], value);
      if (pairs.has(nums[i])) {
          value = pairs.get(nums[i]) + 1;
          pairs.set(nums[i], value);
      }
        allPairs += value;
    }
    return allPairs;
};
console.log(numIdenticalPairs([1,2,3,1,1,3])); //4
console.log(numIdenticalPairs([1,1,1,1])); //6
console.log(numIdenticalPairs([1,2,3])); //0