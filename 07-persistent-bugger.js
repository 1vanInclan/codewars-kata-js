function persistence(num) {
    
    //toString para convertir los numeros a cadenas
    // console.log(num.toString()); 

    // split('') para convertir la cadenas a un arreglo
    // console.log(num.toString().split(''));

    // Reduce para hacer la operacion de multiplicacion con los elementos del arreglo
    // console.log(num.toString().split('').reduce((a,b)=>a*b));

    let i = 0
  
    
    while( num.toString().length !== 1 ){
      num = num.toString().split('').reduce((a,b)=>a*b)
    //   console.log(num)
      i++
    }
    console.log(i);
    return i
    
    
    
    
  }
  
  persistence(39)