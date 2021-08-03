/**
Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses. 

Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "1111"
Output: ["1.1.1.1"]

Example 4:
Input: s = "010010"
Output: ["0.10.0.10","0.100.1.0"]

Example 5:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

Constraints:
0 <= s.length <= 3000
s consists of digits only.
 */

// My implementation which shuffles periods,
// less efficient than shuffling nums in second solution

/*
var restoreIpAddresses = function(s) {
    const addresses = new Set()
    const backTrack = (start = 0, end = s.length-1, currentIP = '', dotCount = 0) => {
        currentIP += s[start]
        if (start === end){
            if (validIP(currentIP)){
                addresses.add(currentIP)
            }
        } else if (dotCount !== 3) {
            backTrack(start + 1, end, currentIP, dotCount) 
            backTrack(start + 1, end, currentIP + '.', dotCount) 
        }
        currentIP = currentIP.substr(0, currentIP.length - 2)
    }
    
    backTrack()
    // console.log(addresses)
    return [...addresses]
};

function validIP (ip){
    const nums = ip.split('.')
    const max = Math.max(...nums)
    // console.log(nums, max, !/(?<=^)0\d{1,2}|(?<=\.)0\d{1,2}/.test(ip))
    return (nums.length === 4 && max <= 255 &&  !/(?<=^)0\d{1,2}|(?<=\.)0\d{1,2}/.test(ip))
}
*/

var restoreIpAddresses = function (s) {
  const result = []

  function permute(arr = [], str = s) {
    /*  
          We want 4 groups of numbers.
          Three groups have already been added to array, last is the remainder
          With our 4 groups, check to see if the remainder is valid.
          
          If valid, add the valid IP to results and return to the for loop 
          for the next slice of subStrs
          
          If no valid, return to for loop for next iteration of slice
      */

    if (arr.length === 3) {
      if (isValid(str)) {
        result.push([...arr, str])
      }
      return
    }

    /*
          Loop counts up to 3, since that is the limit of hwo long the
          IP segments should be.
          
          Start by splitting the string into the subStr and remainder
          subStr will be between 1 and 3 digits (due to i's limit)
          
          Check to see if this subStr is valid as an IP segment
          - If invalid, go to next iteration
          - If valid, use previously placed segments, plus this new subStr
          - Then pass the remainder in to be sliced up by the next recursive call
      */
    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i)
      if (!isValid(subStr)) continue
      permute([...arr, subStr], str.slice(i))
    }
  }

  function isValid(str) {
    if (+str > 255 || !str.length) return false
    if (str.length >= 2 && str[0] === '0') return false
    return true
  }

  permute()

  // Join IP segments into string address
  return result.map((x) => x.join('.'))
}

/* 
Output of permute function
  
[] 25525511135
[ '2' ] 5525511135
[ '2', '5' ] 525511135
[ '2', '5', '5' ] 25511135
Our permute function has a check for arr.length === 3 with a return
This prevents a recursive call at this point, and allows the loop to begin
[ '2', '5', '52' ] 5511135
// the iteration of i = 3 is skipped because '525' is an invalid subStr
// The loop ends, which ends this permute call, and we return to the previous call
// and go to the next iteration in that call
[ '2', '55' ] 25511135
// We do not have an arr length of 3, so we recurse, and loop there.
[ '2', '55', '2' ] 5511135
[ '2', '55', '25' ] 511135
[ '2', '55', '255' ] 11135

- WE REACHED THE END!!! But the final subStr ('11135') is not valid so this does not
get added to result

After the loop, we end that call, and the last iteration of '2', '552', *anything*
is skipped because '552' is invalid.
This causes us to bump up yet another level to finally go to second iteration of first subStr
[ '25' ] 525511135
arr.length !== 3 so recurse
[ '25', '5' ] 25511135
arr.length !== 3 so recurse
[ '25', '5', '2' ] 5511135
arr.length -== 3 so begin looping
[ '25', '5', '25' ] 511135
[ '25', '5', '255' ] 11135

Backtrack a step, iterate to next step, and continue

[ '25', '52' ] 5511135
[ '25', '52', '5' ] 511135
[ '25', '52', '55' ] 11135

[ '255' ] 25511135
[ '255', '2' ] 5511135
[ '255', '2', '5' ] 511135
[ '255', '2', '55' ] 11135
[ '255', '25' ] 511135
[ '255', '25', '5' ] 11135
[ '255', '25', '51' ] 1135
[ '255', '255' ] 11135
[ '255', '255', '1' ] 1135

-- We end with two final permutations that are actually valid, and get 
pushed to results

[ '255', '255', '11' ] 135
[ '255', '255', '111' ] 35

*/
