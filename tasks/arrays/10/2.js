const reverse = (array) => {
    arr = [];
    for(let i = array.length - 1; i >= 0; --i) {
        arr.push(array[i]);
    }
    return arr;
}

const data = [1, 2, 3];
console.log(reverse(data));   