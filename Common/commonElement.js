//find common elemen in the array
const array = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [1, 2, 4, 5],
    [2, 3, 5],
    [2, 5]
];

function findCommonElement(arr){
    // const cache = {};
    // let maxCount = 0;
    // for(let subArr of arr){
    //     for(let item of subArr){
    //         if(cache.hasOwnProperty(item)){
    //             cache[item]++;
    //             if(cache[item] > maxCount){
    //                 maxCount = cache[item];
    //             }
    //         } else {
    //             cache[item] = 1;
    //         }
    //     }
    // }

    // const overlap = [];
    // for(let key in cache){
    //     if(cache[key] === array.length){
    //         overlap.push(key);
    //     }
    // }

    let overlap = arr[0];
    let temp = [];
    for(let i=1; i<arr.length; i++){
        for(let item of arr[i]){
            if(overlap.includes(item)){
                temp.push(item);
            }
        }
        overlap = temp;
        temp = [];
    }

    console.log(overlap);
}

findCommonElement(array);