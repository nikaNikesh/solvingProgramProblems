//Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    var newString = '';
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let letter of s) {
        if (!vowels.includes(letter)) {
            newString += letter;
        }
    }
 return newString;

};

console.log(removeVowels("leetcodeisacommunityforcoders"));

