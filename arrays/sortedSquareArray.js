// Sorted square arrays.

//inout [1, 2, 3, 4, 5, 6, 7, 8, 9] 
//output [1, 4, 9, 16, 25, 36, 49, 64, 81]

// Solution 1
// O(nlogn) time | O(n) space - where n is the length of the input array
function sortedSquareArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        sortedSquares[idx] = value * value;
    }
    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

// solution 2
function sortedSquareArray1(array) {
    const sortedSquares = array.map(item => item * item);
    return sortedSquares.sort((a, b) => a - b);
}