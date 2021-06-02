const t1 = [[1,3],[2,6],[8,10],[15,18]]

function mergeInterval(intervals){
  if (intervals.length <= 1) return intervals
  // Sort the list in order to compare their indexes
  intervals.sort( (a,b) => a[0] - b[0] )
  
  // Keep track of first interval, we cannot push it to results until overlaps ar
  // handled
  let prevStart = intervals[0][0]
  let prevEnd = intervals[0][1]
  const result = []
  
  for (let i = 1; i < intervals.length; i++){
    let currentInterval = intervals[i]
    let currentStart = currentInterval[0]
    let currentEnd = currentInterval[1]
    if (currentStart <= prevEnd){
      // Current Interval overlaps with pervious
      prevEnd = Math.max(prevEnd, currentEnd)
    } else {
      // No Overlap. Push the longest interval we set and begin next
      result.push([prevStart, prevEnd])
      prevStart = currentStart
      prevEnd = currentEnd
    } 
  }
  // Must always push the last non-overlapping interval 
  result.push([prevStart,prevEnd])
  return result
  
}


console.log(mergeInterval(t1))


