//find common elemen in the array
const array = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [1, 2, 4, 5],
    [2, 3, 5],
    [2, 5]
];

function findCommonElement(arr){
    let common = arr[0];
    let overlap = [];
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<common.length; j++){
            if(arr[i].includes(common[j])){
                overlap.push(common[j]);
            }
        }
        common = overlap;
        overlap = [];
    }
    console.log(common);
    return common;
}

findCommonElement(array);