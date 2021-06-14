// function that prints the valid combinations of n pairs of parenthesis

const combinations = [];

function parenthesisCombination(n, arr=[], pos=0, open=0, close=0){
    if(close === n) {
        let temp = '';
        for(let item of arr){
            temp += item;
        }
        combinations.push(temp);
    } else {
        if(open>close){
            arr[pos] = ') ';
            parenthesisCombination(n, arr, pos+1, open, close+1);
        }
        if(open<n){
            arr[pos] = ' (';
            parenthesisCombination(n, arr, pos+1, open+1, close);
        }
    }
    return null;
}

parenthesisCombination(3);
console.log(combinations);