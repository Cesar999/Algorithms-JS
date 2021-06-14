
function recursiveBinarySearch(arr, num, start = 0, end = arr.length - 1){
    let middle = Math.floor((start + end) / 2);

    if(start > end) {
        return null;
    }

    if(arr[middle] === num){
        return arr[middle];
    }

    if(arr[middle] > num) {
        return recursiveBinarySearch(arr, num, start, middle - 1);
    } else {
        return recursiveBinarySearch(arr, num, middle + 1, end);
    }

}

const array = [2, 3, 5, 6, 8, 9, 11, 13, 15, 19, 21, 23, 25, 26, 28, 30, 33, 34, 38, 39, 41, 44, 45, 47, 48, 50];
let r1 = recursiveBinarySearch(array, 47);
let r2 = recursiveBinarySearch(array, 60);

console.log(r1, r2);