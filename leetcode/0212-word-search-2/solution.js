/*
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:
Input: board = [
                ["o","a","a","n"],
                ["e","t","a","e"],
                ["i","h","k","r"],
                ["i","f","l","v"]
            ], 
        words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Explanation
        ["O","A","_","_"],
        ["_","T","A","E"],
        ["_","H","_","_"],
        ["_","_","_","_"]
 

Example:
Input: board = [
                    ["a","b"],
                    ["c","d"]
                ], 
        words = ["abcb"]
Output: []

Explanation:
                ["a","b"], b & c are diagonal, no match
                ["c","d"]


Pseudocode:
- Create a Trie of the possible words for fast lookups
    - When searching the trie and completing a word, we need to know the word that was completed, not just a bool
        - store the CompletedWord on the node for reference. Its impossible for any TrieNode to be the completion for two dif words
- Searching
    - Run a backtracking depth-first search since we are looking for completed strings and cant reuse cells
        - If the current cell isnt in the next trie children, end that branch
        - If the currentNode has a CompletedWord value, add it to results
            - Results need to be deduped. Could store the results in a Set, but the constraints require array
            - Unset the CompletedWord property on the node after is been added so its not matched again
        - if it is, temporarily unset the value so the cell isnt reused, and search the valid neighbors to the four cardinal directions
        - After searching neighbors, reset the value of the cell
*/


const findWords = (board, words) => {
    const wordTrie = getWordTrie(words)
    // const foundWords = new Set() // requires list. Need to dedupe in trie
    const foundWords = []

    for(let row = 0; row < board.length; row++)
    {
        for (let col = 0; col < board[0].length; col++)
        {
            dfs(row, col, board, wordTrie, foundWords);
        }
    }
    return foundWords;
};

const dfs = (row, col, board, currentNode, foundWords) =>
{
    const char = board[row][col];
    if (char === 0) return; // This cell was already checked in the branch
    if (!currentNode.children.has(char)) return;
    currentNode = currentNode.children.get(char)

    
    if (currentNode.completedWord)
    {
        foundWords.push(currentNode.completedWord);
        currentNode.completedWord = null; // dedupe without using Set
    }

    // Backtrack Search
    board[row][col] = 0;

    if (row > 0) dfs(row - 1, col, board, currentNode, foundWords); // up
    if (row < board.length - 1) dfs(row + 1, col, board, currentNode, foundWords); // down
    if (col > 0) dfs(row, col - 1, board, currentNode, foundWords); // left
    if (col < board[0].length - 1) dfs(row, col + 1, board, currentNode, foundWords); // right

    board[row][col] = char;
    return;
}

const getWordTrie = (words) => {
    const rootNode = new TrieNode()
    const addedWords = new Set() // Not required since trie cant add same word twice anyway. Hoping for slight optimization

    for (const word of words)
    {
        if (addedWords.has(word)) continue;

        let currentNode = rootNode

        for(let i = 0; i < word.length; i++)
        {
            const char = word[i]
            if (!currentNode.children.has(char))
            {
                currentNode.children.set(char, new TrieNode(char))
            }

            currentNode = currentNode.children.get(char)
        }
        currentNode.completedWord = word;
        addedWords.add(word)
    }

    return rootNode;
}


class TrieNode {
    constructor(char) {
        this.char = char // Not required. Just used in debugging
        this.completedWord = null;
        this.children = new Map()
    }
}