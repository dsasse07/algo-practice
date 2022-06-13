// import { minOperations } from './solution';
const { minOperations } = require('./solution')

const n1 = [1,1,4,2,3]
const t1 = 5
// 2

const n2 = [5,6,7,8,9]
const t2 = [4]
// -1

const n3 = [3,2,20,1,1,3]
const t3 = 10
// 5

describe('solution function', () => {
  test('should ', () => {
    
    expect( minOperations( n1, t1 ) ).toEqual( 2 )
    expect( minOperations( n2, t2 ) ).toEqual( -1 )
    expect( minOperations( n3, t3 ) ).toEqual( 5 )
  })
})
