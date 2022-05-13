//[3, 4, 5] output array [20, 15, 12]

const input = [3, 4, 5];

function doMagic(input){
    const reduced = input.reduce((acc, num) => acc * num);
    const output = input.map(num => reduced / num);
    return output;
}

const output = doMagic(input);
console.log(output);