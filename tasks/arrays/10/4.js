const formPairs = (arr) => {
    res = {};
    for(let i = 0; i < arr.length; ++i) {
        res[arr[i][0]] = arr[i][1]; 
    }
    return res;
}

const data = [['a', 1], ['b', 2]];
console.log(formPairs(data));