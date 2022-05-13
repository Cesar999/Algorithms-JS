function reverseStringInPlace(str){
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]]=[arr[right], arr[left]];
        left++;
        right--;
    }

    const reverse = arr.join('');
    console.log(reverse);
    return reverse;
}

const str = 'Cesar Roberto Encinas Realivazquez';
reverseStringInPlace(str);