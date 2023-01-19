function validBraces(braces){
  
    const stack = [];
  //   console.log(braces.length)
    
    for( let i = 0; i < braces.length;i++ ){ //iterar cadena
      const beforeElement = stack[stack.length - 1] //Guardar ultimo elemento del stack 
      if( braces[i] === '(' || braces[i] === '[' || braces[i] === '{' ){
        stack.push(braces[i])
      }else if( braces[i] === '}' && beforeElement === '{' && stack.length !== 0 ){
        stack.pop()
      }else if( braces[i] === ']' && beforeElement === '[' && stack.length !== 0 ){
        stack.pop()
      }else if( braces[i] === ')' && beforeElement === '(' && stack.length !== 0 ){
        stack.pop()
      }else{
          return false
        }   
    }
    console.log(stack.length === 0);
    return stack.length === 0;
}
  validBraces('({})[({})]')
  