function without (array) {
    let arr = [];
    for(let i = 1; i < arguments.length; ++i) {
        for(let j = 0; j < array.length; ++j) {
            if(arguments[i] === array[j]) array.splice(j, 1);
        }
    }
    return array;
}

const data = [1, 2, 3, 1, 2, 4];

console.log(without(data, 1, 2, 3));