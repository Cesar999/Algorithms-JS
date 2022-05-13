// find the max sum of the k elements in the array
function maxSumofK(arr, k){
    let maxSum = 0;
    for(let i=0; i<k; i++){
        maxSum += arr[i];
    }

    let sum = maxSum;
    for(let i=k; i<arr.length; i++){
        sum = sum + arr[i] - arr[i-k];
        if(maxSum < sum){
            maxSum = sum;
        }
    }

    return maxSum;

}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
console.log(maxSumofK(arr, 4)); // 24