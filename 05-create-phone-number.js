function createPhoneNumber(numbers){
    let phone = '' // Declaramos una variable para almacenar el telefono
    const firstNumbers = numbers.slice(0,3); // Almacenamos los primeros 3 elementos del arreglo
    const secondNumbers = numbers.slice(3,6); // Almacenamons siguientes 3 elemenos del arreglo 
    const endNumbers = numbers.slice(6, 10); // Almacenamos los ultimos 4 elementos del arreglo 
  //   console.log(firstNumbers)
  //   console.log(secondNumbers)
  //   console.log(endNumbers)
    
    phone = `(${firstNumbers.join("")}) ${secondNumbers.join("")}-${endNumbers.join("")}` //Asignamos la sintaxis con la que debe ir el telefono
    
  //   console.log(phone)
    return phone;
    
  
  }

//   function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])