function ArrayComparator(data1, data2) {
    if(data1.length === data2.length) {
    for(let key in data2) {
        if(data1[key] || (data1[key] === undefined && data2[key] === undefined) || data1[key] === null ||
        Number.isNaN(data1[key]) || data1[key] === '') {
        if(Array.isArray(data1[key]) && Array.isArray(data2[key])) return ArrayComparator(data1[key], data2[key]);
        else if(data1[key] === 'object' && data2[key] === 'object')
            return ObjectComparator(data1[key], data2[key]);
        } else if(data1[key] !== data2[key]) return false;
    }
    } else return false;
    return true;
}

function ObjectComparator(data1, data2) {
    let l1 = Object.keys(data1).length;
    let l2 = Object.keys(data2).length;
    if(l1 === l2) {
    for(let key of Object.keys(data1)) {
        if(data2[key] || (data2[key] === undefined && data1[key] === undefined) || data2[key] === null ||
        Number.isNaN(data2[key]) || data2[key] === '') {
        if(Array.isArray(data2[key]) && Array.isArray(data1[key])) return ArrayComparator(data1[key], data2[key]);
        else if(typeof data2[key] === 'object' && typeof data1[key] === 'object') return ObjectComparator(data1[key], data2[key]);
        else if(data2[key] !== data1[key]) return false; 
        }
    }
    } else return false;
    return true;
}

function IntersectionDeep(data1, data2) {
    let inters = [];
    for(let key1 of Object.keys(data1)) {
        for(let key2 of Object.keys(data2)) {
            if(Object.is(key1, key2)) {
                let temp = {};
                if(Object.is(data1[key1], data2[key2])) {
                    temp[key1] = data1[key1];
                    inters.push(temp);
                }
                else if(Array.isArray(data1[key1]) && Array.isArray(data2[key2])) {
                    if(ArrayComparator(data1[key1], data2[key2])) {
                        temp[key1] = data1[key1];
                        inters.push(temp);
                    }
                } else if(typeof data1[key1] === 'object' && typeof data2[key2] === 'object') {
                    temp[key1] = data1[key1];
                    inters.push(temp);
                }
            }
        }
    }
    return inters;
}

const data1 = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};

console.log(IntersectionDeep(data1, data2));