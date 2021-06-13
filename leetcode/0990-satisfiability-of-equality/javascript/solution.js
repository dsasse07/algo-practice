/*
Disjoin Set Union
https://cp-algorithms.com/data_structures/disjoint_set_union.html

Given an array equations of strings that represent relationships between variables, 
each string equations[i] has length 4 and takes one of two different forms: 
"a==b" or "a!=b".  
Here, a and b are lowercase letters (not necessarily different) that represent 
one-letter variable names.

Return true if and only if it is possible to assign integers to variable 
names so as to satisfy all the given equations.

Example 1:
Input: ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.

Example 2:
Input: ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.

Example 3:
Input: ["a==b","b==c","a==c"]
Output: true

Example 4:
Input: ["a==b","b!=c","c==a"]
Output: false

Example 5:
Input: ["c==c","b==d","x!=z"]
Output: true

Approach:

We will create a Disjoin Set Union of all of the variable letters that are equal to each other
This data structure is created by defining an object for each value that points to its parent

Initially, each value is its own representative/parent (individual sets)
- We join sets together when certain criteria are met by pointing two valus to the same representative/parent
- The structure is kept O(1) by always pointing the set merge to the root representative, not the immediate parent

1. Create a unique set for each lowercase letter options for a variable
2. Sort the equations so that all '==' comparisons are first, 
we can create a set of all equal variables
3. Iterate through the equations. For every '==' equation merge the two variables into the same set
4. When we reach the "!=" equations, check to see if each variable is in the same set, if so the equantion is invalid
*/


function testEquality(equations) {
  // Store the set representative for each set
  const parent = {}
  // Stores the size of each set to ensure smaller set is meged to larger set
  const size = {}

  const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
  }
  
  // Find the representative of the set an element belongs to
  const findSet = a => {
      if (parent[a] === a) return a
      // Recursively compresses tree structure so that all children of root point to root
      parent[a] = findSet(parent[a])
      return parent[a]
  }
  
  const unionSet = (a,b) => {
    // Takes in representative nodes
    // If the representatives are different, join the smaller set with the larger
      if (a !== b){
          if (size[a] >= size[b]){
              parent[b] = a
              size[a] += size[b]
          } else {
              parent[a] = b
              size[b] += size[a]
          }
      }
  }
  
  // Creates a set for each possible variable character using character codes
  for (let i = 97; i <= 122; i++){
      let letter = String.fromCharCode(i)
      parent[letter] = letter
      size[letter] = 1
  }

  // sorts the equations so that all '==' come before '!='
  let i=0,j=0;     
  while(j < equations.length){
    if(equations[j][1] == '='){
      swap(equations, i++ , j);
    }
    j++;
  }

  for(let eqn of equations){
      let char1 = eqn[0]
      let char2 = eqn[3]
      // Find set represenative for each letter
      const char1Set = findSet(char1)
      const char2Set = findSet(char2)
      
      // If equations hows equality, add both variables to same set
      if (eqn[1] === '='){
        unionSet(char1Set, char2Set)
      } else {
        // If equation shows equality and letters are not in same set, return false
        if (char1Set === char2Set) return false
      }
  }
  return true
};

console.log(testEquality(["a==b","b!=c","c==a"]))