const array = [1, 2, 3, 7, 8, 0, 6, 7, 1, 2, 4, 5, 6, 8, 2, 4, 6, 7, 9, 6, 7, 8, 2, 4, 5, 1, 3, 4, 6];
function maxIncSubSeq(arr){
    let max = 0;
    let count = 1;
    let endIndex = 1;

    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            count++;
        } else {
            count = 1;
        }

        if(count > max){
            endIndex = i;
            max = count;
        }
    }

    console.log([endIndex - max + 1, endIndex, max])
    return [endIndex - max + 1, endIndex, max];
}

maxIncSubSeq(array);