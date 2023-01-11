// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic: 7 , 351

function narcissistic(value) {
    let result = 0;

    let myArr = String(value).split("").map((value)=>{
    return Number(value)
    })   
  console.log(myArr)  

    const exp = myArr.length;
//   console.log(exp)
  
    for( let i in myArr ){
    result = result + Math.pow(myArr[i], exp)
    // console.log(result)
    }

    if (result == value){
        console.log(`${value} es Narcisistico ${result} = ${value}`);
        return true
    } else {
        console.log(`${value} no es narcisistico ${result} No es igual ${value}`);
        return false
    }
  
}

narcissistic(12359)