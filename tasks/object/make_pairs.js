function add_info(inf_arr) {
    let i = 0;
    let temp = {};
    for(let key of Object.keys(users[0])) {
        temp[key] = inf_arr[i];
        i++;
    }
    users.push(temp);
}

const users = [
    {
        id: 1,
        name: 'T',
        surname: 'asd',
        age: 21,
        country: 'kz',
        phone_number: '687876',
        email: 'abelsharman85@gmail.com'
    },
    {
        id: 2,
        name: 'T',
        surname: 'asd',
        age: 21,
        country: 'kz',
        phone_number: '687876',
        email: 'abelsharman85@gmail.com'
    },
    {
        id: 1,
        name: 'T',
        surname: 'asd',
        age: 21,
        country: 'kz',
        phone_number: '687876',
        email: 'abelsharman85@gmail.com'
    },
    {
        id: 1,
        name: 'T',
        surname: 'asd',
        age: 21,
        country: 'kz',
        phone_number: '687876',
        email: 'abelsharman85@gmail.com'
    },
]
let some_info = [5, 'Tlek', 'Suyerbassov', 21, 'KZ', '87080875510',  'abelsharman85@gmail.com'];

console.log(users);
add_info(some_info);
console.log(users);