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



