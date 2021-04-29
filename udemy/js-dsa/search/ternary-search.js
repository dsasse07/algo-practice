/*
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

ind the highest floor an egg can be dropped from without breaking, 
with as few drops as possible.
*/

const ternarySearch = () =>{
  const floors = generateBuilding()
  let start = 0
  let end = 99
  let counter = 0

  const eggBreaks = (eggPosition) => {
    return floors[eggPosition]
  }

  let egg1 = Math.floor( (end-start) / 3 )
  let egg2 = egg1 * 2

  while ( !(!eggBreaks(egg1) && !eggBreaks(egg2) && (end - start) === 1) ){
  // for( let i = 1; i < 10; i++ ){

    egg1 = start + Math.floor( (end-start) / 3 )
    egg2 = start + ( 2 * Math.floor( (end-start) / 3 ) )

    if ( eggBreaks(egg1) && eggBreaks(egg2) ){
      end = egg1
    } else if ( eggBreaks(egg1) && !eggBreaks(egg2) ){
      end = egg2
    } else if ( !eggBreaks(egg1) && eggBreaks(egg2) ){
      start = egg1
      end = egg2
    } else if ( !eggBreaks(egg1) && !eggBreaks(egg2) ){
      start = egg2
    }
  }
  return egg1
}


const generateBuilding = () => {
  const floors = Array(100).fill(false)
  const breakFloor = Math.floor( Math.random() * 100 )
  for( let i = breakFloor; i < floors.length; i++){
    floors[i] = true
  }
  return floors
}

console.log(ternarySearch())