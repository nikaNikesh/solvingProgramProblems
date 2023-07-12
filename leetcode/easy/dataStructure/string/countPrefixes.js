/*2255. Count Prefixes of a Given String

You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

Example 1:

Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
/*let countPrefixes = function(words, s) {
    let counter = 0;
    let prefix = '';
    for (let i = 0; i < s.length; i++) {
        prefix += s[i];
        for (let j = 0; j < words.length; j++) {
            if (words[j] === prefix) {
                counter++;
            }
        }
    }

return counter;
};
console.log(countPrefixes(['r', 'm', 'be', 'b', 'br', 'ber', 'e'], 'ber'));*/

let isPrefix = function (prefix, s) {
    if (s.startsWith(prefix)) {
        return true;
    }
    return false;
}


let countPrefixes = function (word, s) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (isPrefix(word[i], s)) {
            counter++;
        }
    }
    return counter;
};
console.log(countPrefixes(['r', 'm', 'be', 'b', 'br', 'ber', 'e'], 'ber'));

//LC
/*var countPrefixes = function(words, s) {
     let counter = 0
     for (let i = 0; i < words.length; i++) {
         if (words[i] === s.slice(0,words[i].length)) {
            counter++
        }
     }
    return counter
};*/
