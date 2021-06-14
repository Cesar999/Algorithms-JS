// Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.[4] The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

// Best	        |Average	   |Worst    |Worst
// Ω(n log(n))	|Θ(n log(n))   |O(n^2)   |O(log(n))

function quickSort(arr, start = 0, end = arr.length - 1){

    const pivot = arr[end];
    let swapIndex = start;
    for(let i=start; i<end; i++){
        if(arr[i]<=pivot){
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
            swapIndex++;
        }
    }

    [arr[end], arr[swapIndex]] = [arr[swapIndex], arr[end]];

    if(swapIndex > start){
        quickSort(arr, start, swapIndex-1);
    }
    if(swapIndex < end){
        quickSort(arr, swapIndex+1, end);
    } 

    if(start > end){
        //console.log(arr);
    }
    return arr;
}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// quickSort(array1);

// const array2 = [4, 0, 2, 3, 5, 6, 7, 8, 9, 1]; // best case
// quickSort(array2);

// const array3 = [0, 1, 2, 3, 4, 5 ,6 , 7, 8, 9]; // worst case
// quickSort(array3);

// const array4 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // worst case
// quickSort(array4);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = quickSort(unsortedArray);
    return sortedArray;
}, 'quickSort');