class HashTable{
  constructor(size = 53){
    this.keyMap = new Array(size)
  }

  _hash(key){
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    const index = this._hash(key)

    if (this.keyMap[index]){
      for (let pair of this.keyMap[index]){
        if (pair[0] === key){
          pair[1] = value
          return this
        }
      }
      this.keyMap[index].push([key, value])
    } else {
      this.keyMap[index] = [[key, value]]
    }

    return this
  }

  get(key){
    const index = this._hash(key)

    if (this.keyMap[index]){
      for (let pair of this.keyMap[index]){
        if (pair[0] === key) return pair[1]
      }
    }

    return undefined
  }

  keys(){
    const keys = []
    for(let index of this.keyMap){
      if (index){
        for (let entry of index){
          if (!keys.includes(entry[0])) keys.push(entry[0])
        }
      }
    }
    return keys
  }

  values(){
    const values = []
    for(index of this.keyMap){
      if (index){
        for (entry of index){
          if (!values.includes(entry[1])) values.push(entry[1])
        }
      }
    }
    return values
  }
}

const hashMap = new HashTable()

// cyan #00ffff
// pink #ff69b4
// orangered #ff4500