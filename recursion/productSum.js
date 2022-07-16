// Product Sum.

// Solution 1
// O(n) time | O(d) space
function productSum(array, multiplier = 1) {
    let sum = 0;
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }
    return sum * multiplier;
}


// Solution 2
function productSum1(element, multiplier) {
    const sum = array.reduce((a, e) => {
        if (Array.isArray(e)) return a + productSum(e, multiplier + 1);
        return a + e;
    }, 0);
    return sum * multiplier;
}