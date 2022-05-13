// find two numbers in an array that sums a total and return the indexes


// naive approach
// function arraySumN(arr, num){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] === num) {
//                 return [i, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// optimal
// function arraySumN(arr, num){
//     const indexMap = {};
//     let complement;
//     for(let i=0; i<arr.length; i++){
//         complement = num - arr[i]; 
//         if(indexMap.hasOwnProperty(complement)){
//             return [indexMap[complement], i];
//         } else {
//             indexMap[arr[i]] = i;
//         }
//     }
//     return [-1, -1];
// }


function arraySumN(arr, total){
    const cachedNumbers = {};
    let num;
    let diff;
    for(let i=0; i<arr.length; i++){
        num = arr[i];
        diff = total - num;
        if(cachedNumbers.hasOwnProperty(diff)){
            return [cachedNumbers[diff], i];
        }
        if(!cachedNumbers.hasOwnProperty(num)){
            cachedNumbers[num] = i; 
        }
    }
    return [-1, -1];
}

const res1 = arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 9); // [1, 4]
console.log(res1);
const res2 = arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 14); // [4, 9]
console.log(res2);


const res1 = arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 9); // [1, 4]
console.log(res1);
const res2 = arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 14); // [4, 9]
console.log(res2);