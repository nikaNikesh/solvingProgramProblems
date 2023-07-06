//Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    var resault = '';
    for (var letter of s) {
        var code = letter.charCodeAt(0);
        if (code > 64 && code < 91) {
                resault += String.fromCharCode(code + 32);
        } else {
            resault += letter;
        }
    }
return resault;
};
console.log(toLowerCase('HeLlo'));



//console.log("HeLlo".toLowerCase());