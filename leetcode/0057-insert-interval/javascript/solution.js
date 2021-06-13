const t1 = [[1,2],[3,5],[6,7],[8,10],[12,16]], n1 = [4,8]

function insertInterval(intervals, newInterval){
  const result = []
  let i = 0
  // Add intervals that end before new interval starts
  while( i < intervals.length && intervals[i][1] < newInterval[0]){
      result.push(intervals[i])
      i++
  }
  
  // Merge intervals that start after newInt start, but before or equal to when newInt ends
  while( i< intervals.length && intervals[i][0] <= newInterval[1]){
      newInterval[0] = Math.min(intervals[i][0], newInterval[0])
      newInterval[1] = Math.max(intervals[i][1], newInterval[1])
      i++
  }
  result.push(newInterval) // Add the merged result 
  
  //add in remaining intervals that begin after the newInterval
  while ( i < intervals.length){
      result.push(intervals[i])
      i++
  }
  return result
}


console.log(insertInterval(t1,n1))


