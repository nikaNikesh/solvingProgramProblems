
/*
#2000. Reverse Prefix of Word
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

    For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd"
*/


/**
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */


let reversePrefix = function (word, ch) {
    let currentCrIndex;
    let result = '';

    // you can use a method indexOf instead of a loop
    for (let i = 0; i < word.length;) {
        if (word[i] === ch) {
            currentCrIndex = i;
            break;
        } else {
            i++;
        }
    }
    if (currentCrIndex !== undefined) {
        for (let j = currentCrIndex; j >= 0; j--) {
            result += word[j];

        }
        for (let i = currentCrIndex + 1; i < word.length; i++) {
            result += word[i];
        }
    } else {
        result = word;

    }


    return result;
}

console.log(reversePrefix('Igor', 'o'));



//the case when the first character from the end of a word is needed

/*let reversePrefix = function(word, ch) {
    let result = '';
    let i = word.length - 1;

    for (; i >= 0 && word[i] !== ch; i--) {
        result = word[i] + result;
    }
    let prefix = '';

    if (i >= 0) {
        for (; i >= 0; i--) {
            prefix += word[i];
        }
    }
    result = prefix + result;
    return result;
}
console.log(reversePrefix('abcdefd', 'd'));*/

