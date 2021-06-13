


const isSubsequence = (s,t) => {
  if (s === t) return true
  let sIdx = 0
  
  for (let i = 0; i < t.length; i++){
      if (t[i] === s[sIdx]) sIdx ++
      if (sIdx === s.length) return true
  }
  
  return false
}