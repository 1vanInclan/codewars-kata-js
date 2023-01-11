// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){

    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      console.log(wordArr.length);
      for (let i in wordArr){
        if(i > 0){
          // console.log(wordArr[i])
          // console.log(wordArr[i].charAt(0).toUpperCase())
          // console.log(wordArr[i].slice(1)) 
          newStr = newStr + wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr = newStr + wordArr[i]
        }
      }
    }else{
      return newStr
    }
    console.log(newStr)
    return newStr;
  }
  
  toCamelCase('the-stealth-warrior')