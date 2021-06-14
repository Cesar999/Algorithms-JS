const permutations = [];

function printPermutations(str, index=0) {
    if(index === str.length){
        permutations.push(str);
    } else {
        let arr = str.split('');
        for(let i=index; i<arr.length; i++){
            [arr[i], arr[index]] = [arr[index], arr[i]];
            printPermutations(arr.join(''), index+1);
        }
    }
    return permutations;
}

printPermutations('ABC');
console.table(permutations);