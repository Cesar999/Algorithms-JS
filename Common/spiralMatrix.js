// Input:
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

// Output: 
// 1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7 

function spiralMatrix(n){
    const matrix = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    let count = 1;
    
    while(rowStart < rowEnd && colStart < colEnd){

        for(let i=colStart; i<=colEnd; i++){
            matrix[rowStart][i] = count++;
        }
        rowStart++;

        for(let i=rowStart; i<=rowEnd; i++){
            matrix[i][colEnd] = count++;
        }
        colEnd--;

        for(let i=colEnd; i>=colStart; i--){
            matrix[rowEnd][i] = count++;
        }
        rowEnd--;

        for(let i=rowEnd; i>=rowStart; i--){
            matrix[i][colStart] = count++;
        }
        colStart++;

    }

    console.table(matrix);
    return matrix;

}