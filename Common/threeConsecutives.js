// Return true if array contains  somewhere, there increasing adjacent numbers like ..., 4, 5, 6, ... or 23, 24, 25.

// [5,2,3,4,7,8] --> true
// [5,2,4,3,7,8] --> false
// [4,8,2,1,6,9] --> false

function isThreeConsecutives(arr){
    let count = 1;
    for(let i=1; i<arr.length; i++){
        
        if(arr[i - 1] + 1 === arr[i]){
            count++;
        } else {
            count = 1;
        }

        if(count === 3){
            console.log(true);
            return true;
        }
    }

    console.log(false);
    return false;
}

isThreeConsecutives([5,2,3,4,7,8]);
isThreeConsecutives([5,2,4,3,7,8]);
isThreeConsecutives([4,8,2,1,6,9]);