/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 3 dots in word for search queries.
At most 104 calls will be made to addWord and search.





use a Trie
- Each node contains a Map of all of the potential next letters in sequence
- each node also stores a bool that marks it as the end of an added word

To Add, 
- store letters into nodes one by one. At the end of the word, mark it as complete

To Search,
- iterate through the nodes checking that the next letter in sequence is present.
- If wildcard, will need to search over all possible letter nodes at that level.
- At end of word, check if it is marked as a complete word

*/


class WordDictionary {
    constructor(){
        this.root = new TrieNode();
    }

    addWord(word) {
        let current = this.root;
        
        for(const char of word)
        {
            if (!current.children.has(char))
            {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        
        current.isCompletedWord = true;
    }

    search(word, currentNode = this.root) {
        for(let i = 0; i < word.length; i++) 
        {
            const char = word[i];

            if (char === ".")
            {
                for(const node of currentNode.children)
                {
                    // node[1] bc iterating over Map returns kvp array [key,value]
                    if (node && this.search(word.slice(i + 1), node[1]))
                    {
                        return true;
                    }
                }
            }
            
            if (!currentNode.children.has(char)) return false; // next letter isnt stored
            currentNode = currentNode.children.get(char); // letter present, go to next node
        }

        return !!currentNode?.isCompletedWord // word is done, and is marked as stored word

    }
};

const getCharIndex = (char) => char.charCodeAt() - 97;

class TrieNode {
    constructor() {
        this.isCompletedWord = false;
        this.children = new Map();
    }
}
