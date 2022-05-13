const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function reverseArray(input){
    let left = 0;
    let right = input.length - 1;
    while(left < right){
        [input[left], input[right]] = [input[right], input[left]];
        left++;
        right--;
    }
    console.log(input);
}

reverseArray(myArray);