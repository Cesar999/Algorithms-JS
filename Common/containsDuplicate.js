function containsDuplicate(arr){
    console.log(new Set(arr).size !== arr.length);
    return new Set(arr).size !== arr.length;
    
    // const hashMap = {};
    // for(let item of arr){
    //     if(hashMap.hasOwnProperty(item)){
    //         console.log(hashMap.hasOwnProperty(item));
    //         return true;
    //     } else {
    //         hashMap[item] = true;
    //     }
    // }
    // console.log(false);
    // return false;
}

containsDuplicate([1, 2, 3, 4, 5, 1]); // true
containsDuplicate([9, 8, 7, 6, 5, 5]); // true
containsDuplicate([1, 2, 3, 7, 8, 9]); // false