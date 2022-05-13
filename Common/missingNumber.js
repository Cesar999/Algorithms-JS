// missing number on a sequence of numbers
function missingNumber(arr){
    const reduced = arr.reduce((acc, num)=>acc+num);
    const n = arr.length + 1;
    const sum = n * (n + 1) / 2;
    const res = sum - reduced;
    console.log(res);
    return res;
}

const arr = [9, 5, 8, 3, 2, 1, 4, 6];
missingNumber(arr);
