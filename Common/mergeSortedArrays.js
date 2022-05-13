//Given two sorted arrays, merge them into a new array that is also sorted.

function mergeArrays(arr1, arr2){
    let left = 0;
    let right = 0;
    const mergedArray = [];

    while(left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            mergedArray.push(arr1[left++]);
        } else {
            mergedArray.push(arr2[right++]);
        }
    }

    while(left<arr1.length){
        mergedArray.push(arr1[left++]);
    }

    while(right<arr2.length){
        mergedArray.push(arr2[right++]);
    }

    console.log(mergedArray);
    return mergedArray;
}

const array1 = [1, 3, 4, 7, 8];
const array2 = [2, 5, 6, 9, 10];
mergeArrays(array1, array2); // [1, 2, 3, 4, 5,6, 7, 8, 9, 10]

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];
mergeArrays(arr1, arr2);  // [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]