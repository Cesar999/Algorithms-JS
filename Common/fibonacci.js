// fibonacci 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
// 0  1  2  3  4  5  6  7   8   9   10  11  12   13   14   15   16   17    18    19    20    21


function fibonacci(num){
    if(num === 0 || num === 1){
        console.log(`n: ${num} - ${num}`);
        return num;
    }
    let a = 0;
    let b = 1;
    let res = 0;

    for(let i=2; i<=num; i++){
        res = a + b;
        a = b;
        b = res;
    }
    console.log(`n: ${num} - ${res}`);
    return res;
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(6);
fibonacci(9);
fibonacci(12);
fibonacci(21);