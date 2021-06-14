function fibonacci(n) {
    if(n === 0 || n === 1) {
        console.log(`n: ${n} - ${n}`);
        return n;
    }
    let a = 0;
    let b = 1;
    let temp = 0;
    for(let i=2; i<=n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(`n: ${n} - ${temp}`);
    return temp;
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(6);
fibonacci(9);
fibonacci(12);