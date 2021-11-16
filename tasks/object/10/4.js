function isEmpty(data) {
  empty = true;
  for(key in data) {
    if(data[key] !== null && data[key] !== undefined && !Number.isNaN(data[key]) && data[key] !== '') {
      empty = false;
      break;
    }
  }
  return empty;
}

const data = {a: 1};
const data1 = {a: undefined, c: NaN, b: '', d: undefined};

console.log(isEmpty(data));
console.log(isEmpty(data1));