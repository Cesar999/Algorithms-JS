function containsDuplicate(arr){
    const set1 = new Set(arr);
    console.log(set1.size !== arr.length);
    return set1.size !== arr.length;
}

containsDuplicate([1, 2, 3, 4, 5, 1]);
containsDuplicate([9, 8, 7, 6, 5, 5]);
containsDuplicate([1, 2, 3, 7, 8, 9]);