function testData(length){
    return Array.from({length}, () => Math.round(Math.random()*length));
}

function testAlgorithm(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i-1]>arr[i]){
            console.log('Test failed!');
            return false;
        }
    }
    console.log("\x1b[32m%s\x1b[0m", 'Test passed!');
    return true;
}

function meassureTime(callback, tag){
    const startTimer = new Date().getTime();
    const sortedArray = callback();
    const endTimer = new Date().getTime() - startTimer;
    console.log("\x1b[36m%s\x1b[0m",`Algorithm: ${tag}`);
    console.log("\x1b[31m%s\x1b[0m",`Time: ${endTimer}ms `);
    testAlgorithm(sortedArray);
}

module.exports = {testData, testAlgorithm, meassureTime};

// Algorithm	    Best	       Average	      Worst         TestTime(100,000)
// Merge Sort	    Ω(n log(n))	   Θ(n log(n))	  O(n log(n))   760.411ms
// Heap Sort	    Ω(n log(n))	   Θ(n log(n))	  O(n log(n))   52.321ms
// Quick Sort	    Ω(n log(n))	   Θ(n log(n))	  O(n^2)        40.103ms
// Bubble Sort	    Ω(n)	       Θ(n^2)	      O(n^2)        19543ms
// Insertion Sort	Ω(n)           Θ(n^2)	      O(n^2)        18833ms
// Selection Sort	Ω(n^2)	       Θ(n^2)	      O(n^2)        5904ms

// Algorithm	     Average	    TestTime(100000)
// Merge Sort	   	 Θ(n log(n))	760.411ms
// Heap Sort	   	 Θ(n log(n))	    
// Quick Sort	     Θ(n log(n))	40.103ms
// Bubble Sort	   	 Θ(n^2)	        19543ms
// Insertion Sort	 Θ(n^2)	        18833ms
// Selection Sort	 Θ(n^2)	        5904ms