function mergeSort(array) {
    if (array.length === 1) return array;

    const halfPoint = Math.round(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, halfPoint));
    const rightHalf = mergeSort(array.slice(halfPoint));

    return merge(leftHalf, rightHalf);
}

function merge(leftHalf, rightHalf) {
    const sortedArray = [];

    while (leftHalf.length !== 0 && rightHalf.length !== 0) {
        (leftHalf[0] <= rightHalf[0]) ? sortedArray.push(leftHalf.shift()) : sortedArray.push(rightHalf.shift());
    }
    
    return sortedArray.concat(leftHalf, rightHalf);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1] ))
console.log(mergeSort([105, 79, 100, 110]))
console.log(mergeSort([5, 2, 0, 8, 9, 4, 1]))
console.log(mergeSort([2, 1, 0, 3]))