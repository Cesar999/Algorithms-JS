
function stairs(num){
    let res = '';
    let temp = '';
    for(let i=1; i<=num; i++){
        temp = i<num?'\n':'';
        res += '#'.repeat(i) + temp;
    }
    console.log(res);
}

stairs(7);