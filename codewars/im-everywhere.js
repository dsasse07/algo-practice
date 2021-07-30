/**
Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
 */

function i(word) {
  if (!word || word[0] === 'I' || word[0].toLowerCase() === word[0])
    return 'Invalid word'
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const chars = { vowels: 0, consonants: 0 }

  for (const char of word) {
    vowels.has(char.toLowerCase()) ? chars.vowels++ : chars.consonants++
  }

  return chars.vowels >= chars.consonants ? 'Invalid word' : 'i' + word
}

function i(word) {
  return /^[a-zI]/g.test(word) ||
    word.replace(/[aeiou]/gi, '').length * 2 <= word.length
    ? 'Invalid word'
    : `i${word}`
}
