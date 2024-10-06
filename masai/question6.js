// rearrange the fruits

function rearrangeFruits(fruits){
    let removeFruit = fruits.splice(-4);
    fruits.splice(0,0, ...removeFruit)

    return fruits
}
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));

