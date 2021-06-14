
function stairs(num){
    const char = '#';
    for(let i=0; i<=num; i++){
        console.log(char.repeat(i));
    }
}

stairs(7)