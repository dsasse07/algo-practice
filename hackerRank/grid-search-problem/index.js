const P = [ '9505', '3845', '3530' ]
// const P = [ '9505', '3845', '1111' ]

const G = [
  '7283455864', '6731158619',
  '8988242643', '3830589324',
  '2229505813', '5633845374',
  '6473530293', '7053106601',
  '0834282956', '4607924137'
]

const G2 = [
  '400453592126560',
  '114213133098692',
  '474386082879648',
  '522356951189169',
  '887109450487496',
  '252802633388782',
  '502771484966748',
  '075975207693780',
  '511799789562806',
  '404007454272504',
  '549043809916080',
  '962410809534811',
  '445893523733475',
  '768705303214174',
  '650629270887160'
]

const P2 = [ "99", "99" ]



const G3 = 
[
  "123412",
  "561212",
  "123634",
  "781288"
]

const P3 = [
  "12",
  "34"
]



function gridSearch(G, P) {

  let testString = P[0]
  const rowLength = G[0].length
  const testLength = P[0].length

  for (let i = 1; i < P.length; i++){
    testString = testString + `.{${rowLength-testLength}}` + P[i]
  }

  const testPattern = new RegExp(testString)
  // return testPattern.test(G.join("")) ? "YES" : "NO"
  console.log(`testPattern`, testPattern)
  console.log(`G.join("")`, G.join(""))
  console.log(`object`, testPattern.test(G.join("")))

}





gridSearch(G3,P3)