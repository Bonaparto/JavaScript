function without() {
    for(let i = 1; i < arguments.length; ++i) {
        for(let j = 0; j < arguments[0].length; ++j) {
            if(arguments[i] === arguments[0][j]) arguments[0].splice(j, 1);
        }
    }
    return arguments[0];
}

const data = [1, 2, 3, 1, 2, 4];

console.log(without(data, 1, 2, 3));