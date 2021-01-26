function victotySwim(arr){
    let res = '';
    let min = arr[0][1];
    for (let i = 1; i < arr.length; i++){
        if (arr[i][1] < min){
            res = arr[i][1];
        }
    }
    return +res;
}
console.log(victotySwim([['Nick', 0], ['Bob', 10], ['Kim', 5], ['Kim', 6]])); //6