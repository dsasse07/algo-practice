/*
which takes in an object and finds all of the values 
which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
*/

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

const stringifyNumbers = obj => {
  const newObj = {}

  const string = (entry) => {
      for( let key in obj ){
        if (typeof obj[key] === 'number'){
          newObj[key] = obj[key] + ""
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
          newObj[key] = stringifyNumbers( obj[key] )
        } else {
          newObj[key] = obj[key]
        }
      }
    }
  string(obj)
  return newObj
}

console.log( ["CAR", 'TACO','CAT'], stringifyNumbers(obj) )
