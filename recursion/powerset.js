// power set example

// Solution 1
function powerSet(array, idx = null) {
    if (idx === null) {
        idx = array.length - 1;
    }
    if (idx < 0) return [[]];

    const ele = array[idx];
    const subsets = powerSet(array, idx - 1);
    console.log('subsets...', subsets);
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
        const currentSubset = subsets[i];
        subsets.push(currentSubset.concat(ele));
    }
    return subsets;
}

// Solution 2
function powerSet(array) {
    if (array.length === 0) return [[]];
    let first = array[0];
    let powersetWithoutFirst = powerSet(array.slice(1));
    let powersetWithFirst = powersetWithoutFirst?.map((set) => [first, ...set]);
    return [...powersetWithFirst, ...powersetWithoutFirst];
}

console.log(powerSet([1, 2,, 3]));