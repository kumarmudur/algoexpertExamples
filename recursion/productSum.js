// Product Sum.

// Solution 1
// O(n) time | O(d) space
function productSum(array, multiplier = 1) {
    let sum = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}
