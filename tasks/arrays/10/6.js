const unique = (array) => {
    cnt = {};
    for(let i = 0; i < array.length; ++i) {
        if(cnt[array[i]] === undefined) cnt[array[i]] = 1;
        else {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data));