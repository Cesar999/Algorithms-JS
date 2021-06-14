// Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

// Best	 | Average	| Worst	  | Worst
// Ω(n)  | Θ(n^2)	| O(n^2)  |O(1)

function bubbleSort(arr){
    let swap = false;

    for(let i=0; i<arr.length - 1; i++){
        swap = false;
        for(let j=0; j<arr.length - 1 - i; j++){

            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                swap = true;
            }

        }

        if(!swap) {
            //console.log(arr);
            return arr;
        }

    }

    //console.log(arr);
    return arr;
}

// const array1 = [8, 4, 9, 6, 1, 2, 5, 7, 3, 0]; // average case
// bubbleSort(array1);

// const array2 = [0, 1, 2, 3, 4, 5 ,6 , 7, 8, 9]; // best case
// bubbleSort(array2);

// const array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // worst case
// bubbleSort(array3);

const {testData, meassureTime} = require('./testData');
meassureTime(()=>{
    const unsortedArray = testData(100000);
    const sortedArray = bubbleSort(unsortedArray);
    return sortedArray;
}, 'bubbleSort');