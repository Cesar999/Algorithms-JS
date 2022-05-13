// Return true if array contains  somewhere, K increasing adjacent numbers like ..., 4, 5, 6, ... or 23, 24, 25.

function isKconsecutives(arr, k){
    let count = 1;

    for(let i=1; i<arr.length; i++){
        if(arr[i-1] < arr[i]){
            count++;
        } else {
            count = 1;
        }

        if(k === count){
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

isKconsecutives([5,2,3,4,7,8], 3); // true
isKconsecutives([5,2,4,4,1,8], 3); // false
isKconsecutives([4,5,8,2,1,6,9,3,4,6,8,9,7,1], 5); // true
isKconsecutives([4,5,8,2,1,6,9,3,4,6,2,8,9,7,1], 5); // false