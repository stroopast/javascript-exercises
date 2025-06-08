const palindromes = function (str) {
    str = str.toLowerCase();
    let newStr = ""
    for(let i = 0; i < str.length; i++)
    {
        if(str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 47)
        {
            continue;
        }
        newStr += str[i];
    }

    let palindrome = "";
    for(let i = newStr.length - 1; i >= 0; i--)
    {
        palindrome += newStr[i];
    }
    return palindrome === newStr;
};

// Do not edit below this line
module.exports = palindromes;
