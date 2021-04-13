// function solution ( arr, r ){
//   const positions = {}
//   let counter = 0

//   for (let i = 0; i < arr.length; i++ ){
//     const value = arr[ i ]
//     if ( positions[ value ] !== undefined ){
//       positions[ value ].push( i )
//     } else {
//       positions[ value ] = [ i ]
//     }
//   }

//   for( let val in positions ){
//     const firstNum = positions[ val ]
//     const secondNum = positions[val * r]
//     const thirdNum = positions[ val * (r**2) ]

//     if (firstNum && secondNum && thirdNum){
//       counter += ( 1 * firstNum.length * secondNum.length * thirdNum.length)
//     }
//   }

//   return counter
// } 


function solution ( arr, r ){
  const potentialPairs = {}
  const potentialTriplets = {}
  let count = 0

  for ( let val of arr ){
    if ( potentialTriplets[val] ) count += potentialTriplets[val]

    if ( potentialPairs[val] ) potentialTriplets[ val * r ] = potentialTriplets[ val * r ] ? potentialTriplets[val * r] + potentialPairs[ val ] : potentialPairs[ val ]

    potentialPairs[ val * r ] = potentialPairs[ val * r ] ? potentialPairs[ val * r ] + 1 : 1

  }
  
  return count
}

module.exports = { solution }

















/*

   // Complete the countTriplets function below.
   static long countTriplets(List<long> arr, long r) {

    var count = 0L;
    var bWant = new Dictionary<long, long>();
    var cWant = new Dictionary<long, long>(); 

    foreach (var key in arr)
    {
        // Input values can repeat, therefore 0..n index 
        // triplets encode for 1 value triplet. 
        // 
        // Eg. Given [1 5 5 25 125], the values 
        // 1, 5, 25 (A, B, C) are present at 2 distinct 
        // indexes: (0, 1, 3) and (0, 2, 3).
        //
        // We can deduce the next triplet value given 
        // the ratio-relationship:
        //  A = n
        //  B = A * r
        //  C = B * r
        //
        // Therefore the approach is:
        //     
        //   1. if key is a C value
        //          * yes - increment count n times because 
        //             it was expected n times, where n is the 
        //             number of times we saw the B value 
        //             and expected this C value          
        //   2. if key is a B value
        //          * yes - signal we expect C an additional 
        //             n times, where n is the number of 
        //             times we saw the B value
        //          * no - assume A value, signal we expect
        //             B an additional 1 time

        if (cWant.ContainsKey(key))  
        {
            // key is a cValue
            var c = key;

            // Increase count 'n' times
            count += cWant[c]; 
        }
                    
        if (bWant.ContainsKey(key)) 
        {
            // key is a 'b' value, therefore we expect a c value
            var b = key;
            var c = key * r;

            if (cWant.ContainsKey(c))
                cWant[c] += bWant[b];       
            else 
                cWant[c] = bWant[b];         
        } 
       
        // (ignore this extra block)
        {
            // key is an 'a' value, therefore we expect a b value
            var a = key;
            var b = key * r;

            if (bWant.ContainsKey(b))
                bWant[b] += 1L;       
            else 
                bWant[b] = 1L;   
        }
    }

    return count;
}


*/