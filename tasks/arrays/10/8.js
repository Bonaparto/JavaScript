const turn_to_one = (array) => {
    let ans = [];
    for(let i = 0; i < array.length; ++i) {
        if(Array.isArray(array[i])) ans = ans.concat(turn_to_one(array[i]));
        else ans.push(array[i]);
    }
    return ans;
}

const flatten = (array) => {
    let ans = [];
    for(let i = 0; i < array.length; ++i) {
        if(Array.isArray(array[i])) {
            let temp = turn_to_one(array[i]);
            ans = ans.concat(temp);
        } else ans.push(array[i]);
    }
    return ans;
}

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]