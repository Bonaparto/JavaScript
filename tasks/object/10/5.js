function isEqual(data1, data2) {
  // let l1 = Object.keys(data1).length;
  // let l2 = Object.keys(data2).length;
  // if(l1 === l2) {
    //   for(let i = 0; i < l1; ++i) {
      //     if(d1[i] !== d2[i]) return false;
      //     if(data1[d1[i]] !== data2[d2[i]]) {
        //       return false;
        //     }
        //   }
        // } else {
          //   return false;
          // }
          // return true;
          
    let d1 =  Object.keys(data1).length;
    let d2 =  Object.keys(data2).length;
    if(d1 === d2) {
      for(let [key, value] of Object.entries(data1)){
        if(data2[key] || data2[key] === undefined || data2[key] === null ||
          Number.isNaN(data2[key])){
          if(Number.isNaN(data2[key] && Number.isNaN(data1[key]))) continue;
          if(!Object.is(data1[key], data2[key])){
            return false;
          }
        }
        else{
          return false;
        }
      }
    } else return false;

    return true;


}

const data = {a: undefined, b: 2};
const data1 = {a: undefined, c: NaN, b: '', d: undefined};
const data3 = {a: undefined, b: 2};

console.log(isEqual(data, data1));
console.log(isEqual(data3, data));
console.log(isEqual(data3, data1));