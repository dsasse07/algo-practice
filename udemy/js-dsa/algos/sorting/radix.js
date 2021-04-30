



const radixSort = arr => {

  const getDigit = (num, position) => {
    const digit = Math.floor(num / 10**position)
    return digit % 10
  }
  
  const countDigits = num => {
    if (num === 0) return 1
    return Math.floor( Math.log10( Math.abs(num))) + 1
  }
  
  
  const mostDigits = arr => {
    let max = 0
    for( val of arr){
      max = Math.max(max, countDigits(val))
    }
    return max
  }

  const sort = arr => {
    const maxDigits = mostDigits(arr)

    for( let i = 0; i < maxDigits; i++){
      const bucket = Array.from({length:10}, () => [])
      for( val of arr ){
        const thisDigit = getDigit(val, i)
        bucket[thisDigit].push(val)
      }
      arr = [].concat(...bucket)
    }
    return arr
  }
  return sort(arr)
}



console.log( radixSort([23,345,5467,12,2345,9852]) )
// console.log( countDigits(1234) )
// console.log( countDigits(124) )
// console.log( countDigits(34) )
// console.log( countDigits(0) )

