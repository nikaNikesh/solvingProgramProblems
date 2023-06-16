/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

    A defanged IP address replaces every period "." with "[.]".

Example :
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var defangedAdress = '';
    for (var symbol of address) {
        if (symbol !== '.') {
            defangedAdress += symbol;
        } else {
            defangedAdress += '[' + symbol + ']';
        }
    }
return defangedAdress;
};

/*var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr("255.100.50.0"));*/
