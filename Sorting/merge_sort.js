// Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

// Best	       | Average	|  Worst	    |  Worst
// Ω(n log(n)) |Θ(n log(n)) |  O(n log(n))  |  O(n)

function merge(arrayA, arrayB){
    const arrayC = [];

    while(arrayA.length>0 && arrayB.length>0){
        if(arrayA[0] < arrayB[0]){
            arrayC.push(arrayA.shift());
        } else {
            arrayC.push(arrayB.shift());
        }
    }

    while(arrayA.length>0){
        arrayC.push(arrayA.shift());
    }
    while(arrayB.length>0){
        arrayC.push(arrayB.shift());
    }   

    return arrayC;
}

function mergeSort(arr){
    if(arr.length === 1) {
        return [arr[0]];
    }

    const firstHalf = arr.filter((item, index) => index <= Math.floor((arr.length-1) / 2));
    const secondHalf = arr.filter((item, index) => index > Math.floor((arr.length-1) / 2));

    const arrayA = mergeSort(firstHalf);
    const arrayB = mergeSort(secondHalf);

    return merge(arrayA, arrayB);
}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// const res1 = mergeSort(array1);
// console.log(res1);

// const array2 = [0, 1, 2, 3, 4, 5 ,6 , 7, 8, 9]; // best case
// const res2 = mergeSort(array2);
// console.log(res2);

// const array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // worst case
// const res3 = mergeSort(array3);
// console.log(res3);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = mergeSort(unsortedArray);
    return sortedArray;
}, 'mergeSort');