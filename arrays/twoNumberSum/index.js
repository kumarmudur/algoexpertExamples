// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6];
// target sum = 10


// Solution 1
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
	let len = array.length;
	for (let i = 0; i < len - 1; i++) {
		const firstNum = array[i];
		for (let j = i + 1; j < len; j++) {
			const secondNum = array[j];
			if(firstNum + secondNum === targetSum) {
				return [firstNum, secondNum];
			}
		}
	}
	return [];
}

// Solution 2
// O(n) time  | O(n) space
function twoNumberSum(array, targetSum) {
	  const nums = {};
	  for (const num of array) {
		  const result = targetSum - num;
		  if (result in nums) {
			  return [result, num];
		  } else {
			  nums[num] = true;
		  }
	  }
	  return [];
  }

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;