// In computer science, heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.

// Best	       | Average	 |  Worst	     |  Worst
// Ω(n log(n)) | Θ(n log(n)) |  O(n log(n))  |  O(1)

function heapify(arr, i, n){
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let maxIndex = i;

    if(left < n && arr[left] > arr[maxIndex]){
        maxIndex = left;
    }

    if(right < n && arr[right] > arr[maxIndex]){
        maxIndex = right;
    }

    if(maxIndex != i){
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        heapify(arr, maxIndex, n);
    }

}

function heapSort(arr){
    let n = arr.length - 1;
    for(let i = n; i >= 0; i--){
        heapify(arr, i, n);
    }

    for(let j = n; j > 0; j--){
        [arr[0], arr[j]] = [arr[j], arr[0]];
        heapify(arr, 0, j);
    }

    console.log(arr);
    return arr;
}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// heapSort(array1);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = heapSort(unsortedArray);
    return sortedArray;
}, 'heapSort');
