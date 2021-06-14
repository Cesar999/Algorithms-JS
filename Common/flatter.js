const array = [ 1, [ 2, 3 ], [4, [ 5, [ 6, 7 ], 8 ], 9] ];

function flatter(arr) {
    const isArray = arr.find(item => Array.isArray(item));
    if(isArray) {
        return flatter(arr.flat());
    } else {
        console.log(arr)
        return arr;
    }
}

const flatArray = flatter(array);
console.log(flatArray);