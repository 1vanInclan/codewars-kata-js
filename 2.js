// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){

    newStr = ""
    newArray = str.split(/[-_]/g) 
    
    newArray.map((palabra, index) => {

        index === 0 
        ? newStr += palabra 
        : newStr += palabra[0].toUpperCase() + palabra.substring(1);
        
    })
    return newStr;
    
  }
  
  console.log(toCamelCase('The_Stealth_Warrior'));