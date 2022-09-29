/*

function name: xify
paramenters: string - str

return: string
*/

function xify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++ ){
        newStr += "x";
    }
    return newStr;
}

console.log(xify("hello"));
console.log(xify("Hi Eliza"));


/*

function: yellingChars
parameters: 1 string str
return a newStr

let newStr = ""
loop
+= !

*/

function yellingChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += str[i];
        newStr += "!";
    }
    return newStr;
}

console.log(yellingChars("goodness"))
console.log(yellingChars("Black Adam"))

/*
function: indexedChars

*/

function indexedChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += i;
        newStr += str[i];
    }
    return newStr;
}

console.log(indexedChars("hello"))
console.log(indexedChars("Eliza"));

/*
function name: exclaim
parameter: string 
return: new string

loop
if (str[i] === "?" || str[i] === "."){
    newStr += "!";
}

*/

function exclaim(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){
        if (str[i] === "?" || str[i] === "."){
            newStr += "!";
        } else {
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(exclaim("What are you doing? Are you a fool?"))
console.log(exclaim("This is fine."))

/*
function name: truncate
parameter: string of anysize
return: new string

*/

function truncate(str){
    let newStr = ""

    for(let i = 0; i <= 14; i++){
        newStr += str[i]
        
    }
    return newStr + "...";
}

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."))
console.log(truncate("Well, that's just, like, your opinion man."))

/*
function name; ciEmailify
Parameters: Str of name

changes space to a .
adds @codeimmersives.com
tolowercase - change all characters to lower case

*/

function ciEmailify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        } else {
            newStr += str[i]
        }
        
    }
    newStr += "@codeimmersives.com";
    return newStr.toLowerCase();
}

console.log(ciEmailify("Eliza Cherry-Russell"))

/*
function name: reverse
parameters: string
return - string in reverse

*/

function reverse(str){
    let newStr = "";

    for( let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse("mesaura"))

/*
function name: onlyVowels
parameters: string
return - only the vowels from any string
if(str[i]=== 'a' || str[i]===e || str[i] ||)
*/

function onlyVowels(str){
    let newStr = ""

    for(let i = 0; i <  str.length; i++){
        if(str[i]=== "a" || str[i] === "A"|| str[i]==="e" || str[i] === "E" || str[i] === "i" || str[i] === "I" || str[i] === "o" || str[i] === "O" || str[i] === "u" || str[i] === "U"){
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(onlyVowels("Eliza"))