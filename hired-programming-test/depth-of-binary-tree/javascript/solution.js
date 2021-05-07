
const solution = (s) => {
    const charIndex = {}
    let subStrStart = 0
    let maxLength = 0

    for (let i = 0; i < s.length; j++){
        const thisCharacter = s[i]
        if ( charIndex[thisCharacter] !== undefined ){
            subStrStart = charIndex[thisCharacter] > subStrStart ? charIndex[thisCharacter] : subStrStart
        }
        maxLength =  (i - subStrStart + 1) >  maxLength ? (i - subStrStart + 1) : maxLength
        charIndex[thisCharacter] = i + 1
    }
};
//          'n n d N f d f d f'
//             i       j
const s = 'nndNfdfdf'