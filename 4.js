function rowSumOddNumbers(n) {

    let contador = 0
    let result = 0

	let primerNum = (n*n) - (n - 1)
    // console.log(primerNum);

    while (contador < n) {

        if(primerNum % 2 != 0){
            result += primerNum;
            contador++;
        }
        primerNum++
        
    }

    return result;
}

console.log(rowSumOddNumbers(2));