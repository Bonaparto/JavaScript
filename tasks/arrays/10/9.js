const chunk = (array, size) => {
    let ans = [];
    let temp = [];
    for(let i = 0; i < array.length; ++i) {
        temp.push(array[i])
        if(temp.length === size || i === array.length - 1) {
            ans.push(temp);
            temp = [];
        }
    }
    return ans;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log();
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]  