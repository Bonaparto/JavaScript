function ArrayComparator(data1, data2) {
  if(data1.length === data2.length) {
    for(let key in data1) {
      if(data2[key] || (data2[key] === undefined && data1[key] === undefined) || (data2[key] === null && data1[key] === null) ||
      Number.isNaN(data2[key]) || data2[key] === '') {
        if(Array.isArray(data1[key]) && Array.isArray(data2[key])) return ArrayComparator(data1[key], data2[key]);
        else if(data1[key] === 'object' && data2[key] === 'object' && data2[key] !== null && data1[key] !== null) return ObjectComparator(data1[key], data2[key]);
        else if(!Object.is(data1[key], data2[key])) return false;
      } else return false;
    }
  } else return false;
  return true;
}

function ObjectComparator(data1, data2) {
  // console.log(data1, data2);
  let l1 = Object.keys(data1).length;
  let l2 = Object.keys(data2).length;
  if(l1 === l2) {
    for(let key of Object.keys(data1)) {
      // console.log(data1[key]?.length, data2[key],  Number.isNaN(data2[key]));
      // console.log(data2[key] || (data2[key] === undefined && data1[key] === undefined) || (data2[key] === null && data1[key] === null) ||
      // Number.isNaN(data2[key]) || (data2[key] === '' && data1[key] === ''));
      if(data2[key] || (data2[key] === undefined && data1[key] === undefined) || (data2[key] === null && data1[key] === null) ||
      Number.isNaN(data2[key]) || (data2[key] === '' && data1[key] === '')) {
        if(Array.isArray(data2[key]) && Array.isArray(data1[key])) return ArrayComparator(data1[key], data2[key]);
        else if(typeof data2[key] === 'object' && typeof data1[key] === 'object' && data2[key] !== null && data1[key] !== null) return ObjectComparator(data1[key], data2[key]);
        else if(!Object.is(data1[key], data2[key])) return false; 
      }
      else{
        return false;
      }
    }
  } else return false;
  return true;
}

function isEqualDeep(data1, data2) {
  let equal = true;
  let l1 = Object.keys(data1).length;
  let l2 = Object.keys(data2).length;
  if(l1 === l2) {
    for(let key of Object.keys(data1)) {
      if(data2[key] || (data2[key] === undefined && data1[key] === undefined) || data2[key] === null ||
        Number.isNaN(data2[key]) || data2[key] === '') {
        if(Array.isArray(data2[key]) && Array.isArray(data1[key])) equal = ArrayComparator(data1[key], data2[key]);
        else if(typeof data2[key] === 'object' && typeof data1[key] === 'object') equal = ObjectComparator(data1[key], data2[key]); 
        else if(!Object.is(data1[key], data2[key])) return false;
      } else return false;
      if(equal === false) return false;
    }
  } else return false;
  
  return true;
}

const data1 = {a: {b: {c: null, e: {d: []}}}};
const data2 = {a: undefined, c: NaN, b: '', d: undefined};
const data3 = {a: {b: {c: null, e: {d: []}}}};

console.log(isEqualDeep(data1, data2));
console.log();
console.log(isEqualDeep(data2, data3));
console.log();
console.log(isEqualDeep(data1, data3));