// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

//Best    |Average   |Worst    |Worst
// Ω(n)   |Θ(n^2)    |O(n^2)   |O(1)

function insertionSort(arr){
    for(let i=1; i<arr.length; i++) {
        let j = i - 1;
        const current = arr[i];
        while(current<arr[j] && j>= 0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    //console.log(arr);
    return arr;
}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// insertionSort(array1);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = insertionSort(unsortedArray);
    return sortedArray;
}, 'insertionSort');