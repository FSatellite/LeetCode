var isValid = function(s){
    if (s === "" || s === null || s === undefined)
        return true;
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    let stack = [];
    for (let index = 0; index < s.length; index++) {
        if (s[index] === "(" || s[index] === "{" || s[index] === "[")
            stack.push(s[index]);
        else if(s[index] !== map[stack.pop()])
            return false;
    }
    return stack.length === 0;
}