function fib(number) {
    const array = [0, 1];
    if (number === 0) return 0;
    if (number === 1) return 1;
    while (number > 2) {
        array.push(array.at(-2) + array.at(-1));
        number--;
    }

    return array;
}

function fibRec(number, array = [0, 1]) {
    if (array.length >= number) return array.slice(0, number);

    const newNumber = array.at(-2) + array.at(-1);
    array.push(newNumber)
    return fibRec(number, array)
}

console.log(fibRec(8))
console.log(fibRec(4))
console.log(fibRec(1))