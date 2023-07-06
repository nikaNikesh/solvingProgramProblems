/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Example:
Input: s = "()"
Output: true

Example:
Input: s = "(]"
Output: false
*/


/**
 * @param {string} s
 * @return {boolean}
 */


/*var isValid = function (s) {
    var stack = [];
    var i = 0;
    var result;
    while (i < s.length) {
        if (s[i] != ')' && s[i] != ']' && s[i] != '}') {
            stack.push(s[i]);
            result = false;
        } else {
            var openBracket = stack.pop();
            if ((s[i] === ')' && openBracket === '(') || (s[i] === ']' && openBracket === '[') || (s[i] === '}' && openBracket === '{')) {
                result = true;
            } else {
                result = false;
                break;
            }

        }
        i++;

    }
    if (stack.length) {
        result = false;
    }
    return result;
}
console.log(isValid("{()]()}")); //false
console.log(isValid("{()()}")); //true
console.log(isValid("{{{{{")); //false
console.log(isValid("{()(){[]}}")); //true
console.log(isValid("({{{{}}}))")); //false
console.log(isValid("([]){")); //false
console.log(isValid("([]")); //false*/


var isValid = function (s) {
    var result;
    var stack = [];
    const bracketMatching = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (var i =0; i < s.length; i++) {
        if (s[i] != bracketMatching["("] && s[i] != bracketMatching["["] && s[i] != bracketMatching["{"] ) {
            stack.push(s[i]);
            result = false;
        } else {
            var openBracket = stack.pop();
            if (bracketMatching[openBracket] === s[i]) {
                result = true;
            } else {
                result = false;
                break;
            }

        }

    }
    if (stack.length) {
        result = false;
    }
    return result;
}
console.log(isValid("{()]()}")); //false
console.log(isValid("{()()}")); //true
console.log(isValid("{{{{{")); //false
console.log(isValid("{()(){[]}}")); //true
console.log(isValid("({{{{}}}))")); //false
console.log(isValid("([]){")); //false
console.log(isValid("([]")); //false

/*
var isValidLeedCode = function(s) {
    let stack = [];
    const matching = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (const c of s) {
        if (c in matching) { // if c is an opening bracket
            stack.push(c);
        } else {
            if (!stack.length) {
                return false;
            }

            let previousOpening = stack.pop();
            if (matching[previousOpening] != c) {
                return false;
            }
        }
    }

    return !stack.length;
};*/
