const compact = (array) => {
    arr = [];
    for(let i = 0; i < array.length; ++i) {
        if(array[i]) arr.push(array[i]);
    }
    return arr;
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data));