// Function that prints a pyramid of '#' with 'n' floors

function pyramid(n) {
    let res = '';
    for(let i=0; i<n; i++){
      res += '.'.repeat((n-i)) + '#'.repeat(i*2+1) + '.'.repeat((n-i)) + '\n';
    }
    console.log(res);
  }
  
  pyramid(5);