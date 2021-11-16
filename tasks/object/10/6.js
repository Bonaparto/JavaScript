function Invoke(data) {
  
}

const data = {a: {b: [1, 2, 3]}};
// const data1 = {a: undefined, c: NaN, b: '', d: undefined};

console.log(Invoke(data, 'a.b', 'splice', [1, 2]));
// console.log(Invoke(data1));