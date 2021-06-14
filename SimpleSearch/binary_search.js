// In computer science, binary search is a search algorithm that finds the position of a target value within a sorted array.

// O(log n)  =>  worse and average case
// O(1)      =>  Best case

// Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

function binary_search(arr, num){
   
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle]!==num) {

        if(start > end){
            console.log(null);
            return null;
        }

        if(num < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);

    }
    console.log(arr[middle]);
    return arr[middle];
}


const array = [2, 3, 5, 6, 8, 9, 11, 13, 15, 19, 21, 23, 25, 26, 28, 30, 33, 34, 38, 39, 41, 44, 45, 47, 48, 50];
//const array = [0, 1, 2, 3, 4, 5];
binary_search(array, 47);
binary_search(array, 60);