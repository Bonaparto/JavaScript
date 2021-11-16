function without(data) {
    for(let i = 1; i < arguments.length; ++i) {
        if(arguments[i] in data) {
            delete data[arguments[i]];
        }
    }
    return data;
}

const data = {a: 1, b: 5, c: 'fdsfsd', d: 5};
console.log(data);
console.log(without(data, 'a', 'b', 'c'))