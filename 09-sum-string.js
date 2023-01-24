// function incrementString (str) {
//     console.log("str: ", str)
//     const body = str.slice(0, -1);
//     console.log("body: ", body)
//     const lastDigit = str.slice(-1).match(/[0-9]/);
//     console.log("lastdigit: ",str.slice(-1))
    
//      if (lastDigit === null) {
//           console.log("Primera entrada")  
//           console.log(str + "1")
//           return str + "1";
//       } else if (lastDigit != 9) {
//         console.log("entramos")
//         console.log(body)
//         console.log(+lastDigit + 1)
//           return body + (+lastDigit + 1);
//         } else {
//           return incrementString(body) + "0";
//         }
//   }


function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))){
        console.log("No es un numero el ultimo digito");
        return input + '1'
    }
    return input.replace(/(0*)([0-9]+)/, function(_,p1, p2) {
        console.log("p1: ",p1);
        console.log("p2: ",p2);
      var up = parseInt(p2) + 1;
      console.log("up: ",up);
      if(up.toString().length > p2.length){
        console.log(p1.slice(0, -1));
        return p1.slice(0, -1) + up
      }else{
        return p1 + up
      }
    });
  }

  console.log("resultado: ",incrementString("foobar00999")); 