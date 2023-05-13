function reverseString(string) {
    var x = "";
    for (var i = string.length - 1; i >= 0; i--) {
        x += string[i];
    }
    return x;    
}

module.exports = reverseString;