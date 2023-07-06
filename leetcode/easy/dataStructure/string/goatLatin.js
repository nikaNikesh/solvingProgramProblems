/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

    We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

    If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
    For example, the word "apple" becomes "applema".
    If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
    For example, the word "goat" becomes "oatgma".
    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
    Return the final sentence representing the conversion from sentence to Goat Latin.*/

/**
 * @param {string} sentence
 * @return {string}
 */
//Tigor solution, slow solution
// let toGoatLatin = function (sentence) {
//     let vowel = ['a', 'e', 'i', 'o', 'u']
//
//     let result = '';
//
//     for (let i = 0, wordCount = 1; i < sentence.length; wordCount++) {
//         let word = '';
//         let tail = '';
//
//         for (; sentence[i] === ' '; i++) {
//             result += sentence[i];
//         }
//
//         for (let j = 0; sentence[i] !== ' ' && i < sentence.length; i++,  j++) {
//             if (vowel.includes(sentence[i].toLowerCase()) && j === 0) {
//                 tail += 'ma';
//                 word += sentence[i];
//             } else if (j === 0) {
//                 tail += sentence[i] + 'ma';
//             } else {
//                 word += sentence[i];
//             }
//         }
//
//         result += (word + tail);
//
//         for (let j = wordCount; j > 0 ; j--) {
//             result += 'a';
//         }
//
//     }
//     return result;
// }
//
// console.log(toGoatLatin('I speak Goat Latin'));
// console.log('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
// console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'));
// console.log('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa')

let toGoatLatin = function (sentence) {

}

// let str = "Hello, World";
//
// let strings = str.split(' ');

// let arr = ['Hel', 'lo', 'wo', 'rld'];
//
// console.log(arr.join());
