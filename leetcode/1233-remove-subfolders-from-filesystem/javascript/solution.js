
/********************** TRIE SOLUTION  **************/
class TrieNode {
    constructor(){
        // Contains all of the next possible chars (26 options)
        this.children = {}
        // Path indicates the completion of the key from root to end
        this.path = undefined
    }
}
  


const removeSubfolders = folders => {
  // Root node has no value, and can point to 26 ref (26 letters)
  const root = new TrieNode()
  
  // Create Trie for folder directories to find the roots
  for (let directory of folders){
    // Begin at the root '/'
    let current = root
    
    // Iterate through Array of folders formed by splitting directory path
    for (let folder of directory.split('/').slice(1)){
      // If this next key has not been seen before, create new node
      if (current.children[folder] === undefined){
          current.children[folder] = new TrieNode()
      }
      // Update current to child node
      current = current.children[folder]
    }
    // Now that current is the bottom most node of current directory
    // Save its final path to know where the entry ended.
    current.path = directory
  }
    
  const findPath = (node, result) => {
      // We want to return the first path we find in each child tree from the root
      // These first paths are the root paths of their trees

      // If a path has been saved add it to result and return, dont dig deeper
      if (node.path){
          result.push(node.path)
          return result
      }
      
      // If we have not found a path, check for path in each child
      for (let child in node.children){
          result = findPath(node.children[child], result)
      }
      // Return the filled Array
      return result
  }

    return findPath(root, [])
}


console.log( removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])) // ["/a","/c/d","/c/f"]

/************* ITERATIVE SOLUTION ***********/

const removeSubfoldersIterative = folders => {
  // Sort the paths alphabettically (and by length as side effect)
  folders.sort((a,b) => a.localeCompare(b));

  // Initialize a stack that will also hold all the results
  let stack = [folders[0]]

  // Starting at the second directory...
  for (let i = 1; i < folders.length; i++){
    let current = stack[stack.length-1]
    // If the current directory does not start with the previous, it can't be a child
    // If the current directory does not have a '/' where the previous entry would 
    // have left off, then th etwo directories must be siblings
    // Ex: '/a/b/c' '/a/b/d' 
    if (!folders[i].startsWith(current) || folders[i].charAt(current.length) !== '/'){
      stack.push(folders[i])
    } 
  }

  return stack
}


console.log( removeSubfoldersIterative(["/a","/a/b","/c/d","/c/d/e","/c/f"])) // ["/a","/c/d","/c/f"]
console.log( removeSubfoldersIterative(["/a/b/c","/a/b/d"])) // ["/a","/c/d","/c/f"]




module.exports = { removeSubfolders }