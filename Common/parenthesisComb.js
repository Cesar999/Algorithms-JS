// function that prints the valid combinations of n pairs of parenthesis

function parenthesisCombination(n){
    const combinations = [];

    function recursiveCombination(n, arr=[], pos=0, open=0, close=0){
        if(close === n){
            combinations.push(arr.join(''));
        } else {
            if(open > close){
                arr[pos]=(')');
                recursiveCombination(n, arr, pos+1, open, close+1);
            }
            if(open < n){
                arr[pos]=('(');
                recursiveCombination(n, arr, pos+1, open+1, close);
            }
        }

        return combinations;
    }

    return recursiveCombination(n);

}

console.table(parenthesisCombination(3));