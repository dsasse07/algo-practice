const a1 = [5, 7, 5, 7, 4, 5, '', '', '', '']
const a2 = [
  5,
  1,
  2,
  5,
  5,
  5,
  1,
  6,
  1,
  5,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]

class FreqStack {
  constructor() {
    this.freqs = {}
    this.stacks = {}
    this.maxFreq = 0
  }

  push(val) {
    const newFreq = this.freqs[val] + 1 || 1
    this.freqs[val] = newFreq
    this.maxFreq = Math.max(this.maxFreq, newFreq)
    if (this.stacks[newFreq] === undefined) {
      this.stacks[newFreq] = []
    }
    this.stacks[newFreq].push(val)
  }
  pop() {
    const returnVal = this.stacks[this.maxFreq].pop()
    this.freqs[returnVal] = this.maxFreq - 1
    if (this.stacks[this.maxFreq].length === 0) this.maxFreq--
    return returnVal
  }
}

const run = (vals) => {
  const f = new FreqStack()
  for (let val of vals) {
    if (val === '') {
      console.log(f.pop())
    } else {
      console.log(f.push(val))
    }
  }
}

run(a1)
console.log('test 2')
run(a2)
