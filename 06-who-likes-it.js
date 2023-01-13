function likes(names) {

    let result = "";
    let contador = 0;

    if(names.length === 0){
        result = 'no one likes this'
        console.log(result);
        return 'no one likes this'
        }

    if( names.length === 1 ){
        result = names + ' likes this';
        console.log(result)
        return result
    }

    if( names.length === 2 ){
        for (let i = 0; i < names.length; i++) {
            if (i === 1) {
              result += names[i] + " likes this";
            } else {
              result += names[i] + " and ";
            }
          }
        console.log(result);
        return(result)
    }

    if( names.length === 3 ){
        for (let i = 0; i < names.length; i++) {
            if (i === 2) {
                result += names[i] + " likes this";
              }
            if (i === 1) {
                result += names[i] + " and ";
            } 
            if (i === 0){
                result += names[i] + ", ";
            }
          }
        console.log(result);
        return(result)
    }

    if( names.length > 3 ){
        for (let i = 0; i < names.length; i++) {
            if (i === names.length - 1) {
                result += (names.length - 2) + " others like this";
              }
            if (i === 1) {
                result += names[i] + " and ";
            } 
            if (i === 0){
                result += names[i] + ", ";
            }
          }
        console.log(result);
        return(result)
    }

    }
    
likes(['Ivan','Carlos','Pepo','Luis','Juan','Adrian'])