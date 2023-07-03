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
let toGoatLatin = function (sentence) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < sentence.length; i++) {
        let word = '';
        let tail = '';
        let counter = 0;

        for (let j = 0; sentence[i] !== ' ' && i < sentence.length ; j++, i++) {
            if (vowel.includes(sentence[i].toLowerCase()) && j === 0) {
                word += sentence[i];
                tail = 'ma';
            } else if (j === 0) {
                tail = sentence[i] + 'ma';
                counter ++;
            } else {
                word += sentence[i];
                counter ++;
                let k = 0;
                while (word.length < word.length + counter) {
                    word += "a";
                    k++;
                }
            }
        }
        word += tail;
      console.log(word);
    }

}

toGoatLatin('I speak Goat Latin english');
/*
let toGoatLatin = function (sentence) {
    let newString = '';
    let resault = '';
    let counter = 1;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i + 1] === " ") {
            counter++;
            resault += 'ma';
        } /!*else { if (sentence[i + 2] !== 'a'|| 'e' || 'i' || 'o' || 'u' ||  'A'|| 'E' || 'I' || 'O' || 'U') {

        }*!/
            resault += sentence[i];
        }
    }

    for (let j = 0; j < resault.length; j++) {
        if (resault[j] === 'ma') {
           while (resault.length < resault.length + counter) {
               newString += 'a';

           }
        } else {
            newString += resault[j];
        }
    }


    return newString;
};

console.log(toGoatLatin('I speak Goat Latin'));*/


/*
let toGoatLatin = function (sentence) {
    let newString = '';
    let firstConsonant = '';
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < sentence.length; i++) {
        if (vowel.includes(sentence[i].toLowerCase()) {
            newString += sentence[i];
        } else {
            firstConsonant = sentence[i];
        }
    }
return newString;
};
console.log(toGoatLatin('I speak Goat Latin'));*/

