
// Function that returns the first two indexes of two values that its sum is equal to N

function arraySumN(arr, n){
    const arrSorted = arr.map((item, index) => {
        return {
            val: item,
            originalIndex: index
        }
    });

    arrSorted.sort((a, b) => {
        if(a.val<b.val){
            return -1;
        } else {
            return 1;
        }
    });
    let k = 0;
    let j = 1;

    while(arrSorted[k].val + arrSorted[j].val !== n){

        if(arrSorted[k].val + arrSorted[j].val < n) {
            j++;
        } else {
            k++;
            j = k + 1;
        }

        if(j >= arrSorted.length) {
            k++;
            j = k + 1;
        }

        if(k >= arrSorted.length - 1) {
            return [-1, -1];
        }

    }

    const pair = [arrSorted[k].originalIndex, arrSorted[j].originalIndex];

    console.log(pair);
    return pair;
}

arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 9); // [1, 4]
arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 14); // [4, 9]

