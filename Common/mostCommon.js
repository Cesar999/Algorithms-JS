function mostCommon(arr){
    const map = {};
    let max = 0;
    let result = null;
    for(let item of arr){
        if(!map[item]){
            map[item] = 1;
        } else {
            map[item]++;
            if(map[item] > max){
                max = map[item];
                result = item;
            }
        }
    }
    console.log(result);
    return result;
}

mostCommon([5,6,6,5,2,3,6,6,1,5,5,1,6,9,2,4,1,9,7,8,9,4,5,2,6,5,5,6,7,4,4,6])