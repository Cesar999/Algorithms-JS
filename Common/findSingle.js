// finds a single element in the array not necessarily the first to appear
// function findSingle(arr){
//     const cache = {};
//     for(let item of arr){
//         if(cache.hasOwnProperty(item)){
//             cache[item]++;
//         } else {
//             cache[item] = 1;
//         }
//     }
//     for(let num in cache){
//         if(cache[num] === 1){
//             console.log(num);
//             return num;
//         }
//     }
//     console.log(null);
//     return null;
// }

// finds the first single in the array

function findFirstSingle(arr){
    const map = new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }

    for(let item of map){
        const [key, value] = item;
        if(value === 1){
            return key;
        }
    }

    return null;
}

const firstSingle = findFirstSingle([4,3,5,1,2,1,2,3,4,0]);
console.log(firstSingle);