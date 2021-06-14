// Function that moves all the zeros to the end of the array

function moveZeroes(arr){
    let count = 0;
    let resultArray = Array.from({length: arr.length}, () => 0);
    for(let num of arr){
        if(num!==0){
            resultArray[count++]=num;
        }
    }
    console.log(resultArray);
    return resultArray;
}

const arr = [0,1,2,0,3,4,0,0,0,5,6,0,0,7,8,0,9,0];
moveZeroes(arr)