// Input:
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

// Output: 
// 1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7 

function spiralMatrix(n){
    let matrix = Array.from({length: n}, () =>  Array.from({length: n}, () => 0));
    
    let rowStart = 0;
    let rowEnd = n-1;
    let colStart = 0;
    let colEnd = n-1;

    let count = 1;

    // Clockwise

    while(rowStart < rowEnd && colStart < colEnd){
        // Write from left to right first row
        for(let c=colStart; c<=colEnd; c++){
            matrix[rowStart][c] = count++;
        }
        rowStart++;
        
        // write from top to bottom last column
        for(let r=rowStart; r<=rowEnd; r++){
            matrix[r][colEnd] = count++;
        }
        colEnd--;
        
        // write from right to left last row
        for(let c=colEnd; c>=colStart; c--){
            matrix[rowEnd][c] = count++;
        }
        rowEnd--;
        
        // write from bottom to top firs column
        for(let r=rowEnd; r>=rowStart; r--){
            matrix[r][colStart] = count++;
        }
        colStart++;
    }

    console.table(matrix);
}

spiralMatrix(10);