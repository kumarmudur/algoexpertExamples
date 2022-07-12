// check string is palindrome or not

// solution 1
// O(n^2) time | O(n) space
function isPalindrome(string) {
    let reversedString = '';
    for (let  i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return string === reversedString;
}

// solution 2
// O(n) time | O(n) space
function isPalindrome(string) {
    const reversedChars = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedChars.push(string[i]);
    }
    return string === reversedChars.join();
}

// solution 3
// O(n) time | O(1) space
function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    if (string.length === 0) return false;
    while (leftIdx < rightIdx) {
        if (string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}

// solution 4
function isPalindrome(string) {
    return string.split('').reverse().join('');
}

