function secondLargest(arr){
    let first = 0;
    let second = 0;
    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        } else if(num > second && num != first) {
            second = num;
        }
    }
    console.log(second);
    return second;
}

const array = [4, 2, 5, 6, 6, 7, 6, 7, 1];
secondLargest(array);
