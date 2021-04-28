/*
  Given an array of strings
  capitalize the first letter of each string
*/

const capitalizeFirst = val => {
  const newArr = []

  const cap = v => {
    if (v.length === 0) return
    const str = v[0]
    newArr.push( str[0].toUpperCase() + str.slice(1) )
    cap( v.slice(1) )
  }

  cap(val)
  return newArr
}

console.log( ["Car", 'Taco','Cat'], capitalizeFirst(['car','taco','cat']) )
