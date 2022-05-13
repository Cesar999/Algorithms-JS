// returns and array with the startIndex, endIndex and length of the max incrementing sub-sequence
const array = [1, 2, 3, 7, 8, 0, 6, 7, 1, 2, 4, 5, 6, 8, 2, 4, 6, 7, 9, 6, 7, 8, 2, 4, 5, 1, 3, 4, 6];

function maxIncSubSeq(arr){

    let maxCount = 1;
    let maxIndex = 0;
    let count = 1;
    for(let i=1; i<arr.length; i++){
        if(arr[i-1] < arr[i]){
            count++;
        } else {
            count = 1;
        }

        if(maxCount < count){
            maxCount = count;
            maxIndex = i;
        }
    }

    console.log([maxIndex - maxCount + 1, maxIndex, maxCount]);
    return [maxIndex - maxCount + 1, maxIndex, maxCount];

}

maxIncSubSeq(array); // [8, 13, 6]