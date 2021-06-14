function naiveSearch(str, substr){
    let index = 0;
    for(let i=0; i<str.length; i++){
        if(index === substr.length){
            console.log([i - index, i], str.substring(i - index, i));
            return [i, i+index];
        }

        if(str[i] === substr[index]){
            index++;
        } else {
            index = 0;
        }
    }

    console.log([-1, -1]);
    return [-1, -1];
}

const str = `Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.`
const substr = 'his dark throne';
naiveSearch(str, substr);