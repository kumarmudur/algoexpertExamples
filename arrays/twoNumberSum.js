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

// Solution 3
// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		const currentSum = array[left] + array[right];
		if (currentSum === targetSum) { 
			return [array[left], array[right]];
		} else if (currentSum < targetSum) {
			left++;
		} else if (currentSum > targetSum) {
			right--;
		}
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;