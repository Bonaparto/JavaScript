function MakePairs(data) {
    let pairs = [];
    for(key in data) {
        pairs.push([key, data[key]]);
    }
    return pairs;
}

const data = { a: 1, b: 2, c: 3};
console.log(MakePairs(data));