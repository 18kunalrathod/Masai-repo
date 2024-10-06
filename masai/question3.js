// palindrome checker

function checkPlaindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str[i] == str[str.length-1-i]){
            return true;
        }
        else{
            return false;
        }
    }
}

const result = checkPlaindrome("masai");
const result2 = checkPlaindrome("amma");
console.log(result)
console.log(result2)