function isEmptyDeep(data) {
  let empty = true;
    for(key in data) {
       if(typeof data[key] === 'object') {
         empty = isEmptyDeep(data[key]);
         if(empty === false) return empty;
       } else if(data[key] !== null && data[key] !== undefined && !Number.isNaN(data[key]) && data[key] !== '') {
         empty = false;
       }
    }
    return empty;
}


const data1 = {a: {b: undefined, c: { d: [1,2] }}};
const data2 = {a: undefined, c: NaN, b: '', d: undefined};
const data3 = {a: {b: [], d: {1: 2}}};

console.log(isEmptyDeep(data1));
console.log(isEmptyDeep(data2));
console.log(isEmptyDeep(data3));