A =  [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]

let cnt = {}

for (i of A) {
    if(i in cnt) {
        cnt[i]++;
    } else {
        cnt[i] = 1;
    }
}

for (i in cnt) {
    if(cnt[i] % 2 != 0) {
        console.log(int(i));
    }
}