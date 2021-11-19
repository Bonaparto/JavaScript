const unique = (array) => {
    // let cnt = {};
    // for(let i = 0; i < array.length; ++i) {
    //     if(cnt[array[i]] === undefined) cnt[array[i]] = 1;
    //     else {
    //         array.splice(i, 1);
    //         i--;
    //     }
    // }
    // return array;
    let arr_2 = [];
    array.forEach(element => {
        if(!arr_2.includes(element)){
            arr_2.push(element)
        }
    });
    return arr_2;
}

const data = [1, 2, 1, 2, 3, 4, 4, 3];
console.log(unique(data));