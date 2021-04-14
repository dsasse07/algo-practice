const test1 = [
  [1, 12, 5, 111, 200, 1000, 10 ],
  50
]


function solution ( prices, k ){
  prices.sort( (a,b) => a - b)
  let numToys = 0
  for( let price of prices ){
    if ( price >= k) break
    numToys++
    k -= price
  }
  return numToys
} 

module.exports = { solution }