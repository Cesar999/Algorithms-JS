//In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself. Prime numbers are divisible only by the number 1 or itself.  
// Write a function that prints the prime numbers from 1 to n.

// 100
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function primeNumbers(n){
    const primes = [];
    let isPrime = true;
    for(let i=2; i<=n; i++){
        for(let j=2; j<i; j++){
            if(i%j === 0){
                isPrime = false;
            }
        }
        if(isPrime){
            primes.push(i);
        } else {
            isPrime = true;
        }
        
    }
    console.log(primes);
    return primes;
}

primeNumbers(100);