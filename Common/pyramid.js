// Function that prints a pyramid of '#' with 'n' floors

function pyramid(n) {
    for(let i=0; i<n; i++){
        let left = ' '.repeat(n-i) + '#'.repeat(i);
        let right = '#'.repeat(i) + ' '.repeat(n-i);
        let result =  left + '#' + right;
        console.log(result);
    }
}

pyramid(5)