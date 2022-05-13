const array = [ 1, [ 2, 3 ], [4, [ 5, [ 6, 7 ], 8 ], 9] ];

function flatter(arr){
    const hasArray = arr.some(item=>Array.isArray(item));
    if(hasArray){
        return flatter(arr.flat());
    }
    return arr;
}

const flatArray = flatter(array);
console.log(flatArray);