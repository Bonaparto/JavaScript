function add_info(inf_arr) {
    let i = 0;
    for(let key of Object.keys(info)) {
        info[key].push(inf_arr[i]);
        i++;
    }
}

var info = {
    id: [],
    first_name: [],
    last_name: [],
    age: [],
    country: [],
    phone_number: [],
    email: []
}

let some_info = [1, 'Tlek', 'Suyerbassov', 21, 'KZ', '87080875510',  'abelsharman85@gmail.com'];

console.log(info);
add_info(some_info);
console.log(info);


// id, first_name, last_name, age, country, phone_number, email
// [1, 'Tlek', 'Suyerbassov', 21, 'KZ', '87080875510',  'abelsharman85@gmail.com']