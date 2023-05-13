function stringlength(string) {
    let count = 0;

    if(string.length == 0) throw new Error("at least 1 character condition is not meet");
    if(string.length >= 10) throw new Error("less than 10 characters long condition is not meet");

    for (var i = 0; i < string.length; i += 1) {
        count ++;  
    }
          
    
    return count;
}

module.exports = stringlength;