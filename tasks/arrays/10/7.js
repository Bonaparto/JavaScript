const isEqual = (array1, array2) => {
    if(array1.length === array2.length) {
        for(let i = 0; i < array1.length; ++i) {
            if(array1[i] !== array2[i]) return false;
        }
    } else return false;    
    return true;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false