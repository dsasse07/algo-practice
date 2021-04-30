/*
which takes in an object and finds all of the values 
which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
*/

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

const collectStrings = obj => {
  const wordArr = []

  const string = (entry) => {
      for( let key in entry ){
        if (typeof entry[key] === 'string'){
          wordArr.push( entry[key] )
        } else if (typeof entry[key] === 'object'){
          string( entry[key] )
        }
      }
    }
  string(obj)
  return wordArr
}

console.log( ["foo", 'bar','baz'], collectStrings(obj) )
