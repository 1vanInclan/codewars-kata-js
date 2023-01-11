function rowSumOddNumbers(n) {
	let primerNum = (n * n) - (n - 1);
  let resultado = 0;
  let contador = 0;
  
  while (contador < n){
    // console.log( contador + ' Contador' )
    if (primerNum % 2 !== 0){
    //   console.log(primerNum + ' entra')
      resultado = primerNum + resultado;
    //   console.log(resultado + ' ans');
      contador++;
    }
    primerNum++;
    // console.log(primerNum + ' primerNum');
  }
  return resultado
}

rowSumOddNumbers(2)