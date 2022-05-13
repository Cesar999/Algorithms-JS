
function mostCommon(arr){
    const cache = {};
    let maxNum = null;
    let maxCount = 0;

    for(let item of arr){
        if(cache.hasOwnProperty(item)){
            cache[item]++;
        } else {
            cache[item] = 1;
        }

        if(cache[item] > maxCount){
            maxCount = cache[item];
            maxNum = item;
        }
    }

    console.log([maxNum, maxCount]);
    return [maxNum, maxCount];
}

mostCommon([5,6,6,5,2,3,6,6,1,5,5,1,6,9,2,4,1,9,7,8,9,4,5,2,6,5,5,6,7,4,4,6]); // [6, 8]