// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic: 7 , 351

function narcissistic(value) {

    let result = 0

    newArray = value.toString().split('').map(e => Number(e));
    // console.log(newArray);

    newArray.map( value => {
        // number = parseInt(value)
        result += Math.pow(value,newArray.length)
    })

    return result === value
    
}

console.log(narcissistic(153));