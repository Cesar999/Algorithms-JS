// A linear search is the simplest method of searching a data set.
// Starting at the beginning of the data set, each item of data is examined until a match is made. Once the item is found, the search ends. If there is no match, the algorithm must deal with this.

function linearSearch(arr, num){
    for(let i=0; i<arr.length; i++){
        const element = arr[i];
        if(element === num) {
            console.log(num);
            return num;
        }
    }
    console.log(null);
    return null;
}

const array = [96, 60, 27, 29, 36, 3, 32, 66, 53, 81, 68, 96, 73, 66, 27,  8, 66, 97, 18, 55];
linearSearch(array, 66);
linearSearch(array, 1);
