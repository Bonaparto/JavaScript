const intersection_of_two = (array1, array2) => {
    let ans = [];
    for(let i = 0; i < array1.length; ++i) {
        for(let j = 0; j < array2.length; ++j) {
            if(array1[i] === array2[j] && !(array1[i] in ans)) {
                ans.push(array1[i]);
               break;
            } else if(array1[i] in ans) break;
        }
    }
    return ans;
}

function intersection() {
    let ans = [];
    for(let i = 0; i < arguments.length; ++i) {
        if(i === 0) ans = intersection_of_two(arguments[i], arguments[i+1]);
        else if(i !== arguments.length - 1) ans = intersection_of_two(arguments[i+1], ans);   
    }
    return ans;
}

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']