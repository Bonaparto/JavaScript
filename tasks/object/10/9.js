function Intersection(data1, data2) {
  let inters = [];
  for(let key1 of Object.keys(data1)) {
    for(let key2 of Object.keys(data2)) {
      if(Object.is(key1, key2)) {
        if(Object.is(data1[key1], data2[key2])) {
          let temp = {};
          temp[key1] = data1[key1];
          inters.push(temp);
          break;
        }
      }
    }
  }
  return inters;
}

const data = {a: 1, b: '', d: undefined};
const data1 = {a: undefined, c: NaN, b: '', d: undefined};

console.log(Intersection(data, data1));
console.log(Intersection(data1, data1));