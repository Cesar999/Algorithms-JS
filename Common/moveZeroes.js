
// Function that moves all the zeros to the end of the array

function moveZeroes(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[count++] = arr[i];
        }
    }

    for(let i=count; i<arr.length; i++){
        arr[i] = 0;
    }

    console.log(arr);
    return arr;
}

const arr = [0,1,2,0,3,4,0,0,0,5,6,0,0,7,8,0,9,0];
moveZeroes(arr);