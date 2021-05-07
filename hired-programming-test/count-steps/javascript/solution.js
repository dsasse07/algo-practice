
const solution = (n) => {
    // 0 -> 1
    // 1 -> 1
    // 2 -> 2
    // 3 -> 4 === (total of n-1, n-2, n-3)
    // 4 -> 7 === (total of n-1, n-2, n-3)
    // 1 - 1 - 1 - 1
    // 1 - 1 - 2
    // 1 - 2 - 1
    // 2 - 1 - 1
    // 2 - 2
    // 1 - 3
    // 3 - 1
    
    const memory = {}

    const countSteps = n => {
        // Only one way to climb 1 or none stairs
        if ( memory[n] !== undefined ){
            return memory[n]
        }
        if (n === 1 || n === 0){
            memory[n] = 1
            return 1
        }
        // 2 stairs can be done 1 & 1 or 2 at once
        if (n === 2){
            memory[n] = 2
            return 2
        }
        memory[n] = countSteps(n - 3) + countSteps(n - 2) + countSteps(n - 1)
        return memory[n]
    }
    return countSteps(n)
};

