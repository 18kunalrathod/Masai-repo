// 

function mergeObject(obj1, obj2){

    let merged = obj1;

    for(let key in obj2){
        if(obj2[key]){
            merged[key] = obj2[key]
        }
    }
    return merged;
}

let object1 = {name : "john", age : 30,}
let object2 = {age :40, place : "new york"}

console.log(mergeObject(object1, object2))