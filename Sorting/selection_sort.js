// The idea behind Selection Sort Algorithm is pretty simple. We divide the array into two parts: sorted and unsorted. The left part is sorted subarray and the right part is unsorted subarray. Initially, sorted subarray is empty and unsorted array is the complete given array.

//Best    |Average   |Worst    |Worst
//Ω(n^2)  |Θ(n^2)    |O(n^2)   |O(1)

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let min_index= i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[min_index]>arr[j]){
                min_index = j;
            }
        }
        [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
    }

    //console.log(arr);
    return arr;

}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// selectionSort(array1);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = selectionSort(unsortedArray);
    return sortedArray;
}, 'selectionSort');