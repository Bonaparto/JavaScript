const fill = (arraysize, value) => {
    array = [];
    while(arraysize) {
        array.push(value);
        arraysize--;
    }
    return array;
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill));