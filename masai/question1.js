// vowels and consonents

function countVowelsAndConsonants(str){
    let count = {vowels : 0, consonents: 0};

    for(let i=0; i<str.length; i++){
        let char = str[i]

        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count.vowels++
        }
        else{
            count.consonents++
        }
    }
    return count
}

const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }

