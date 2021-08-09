// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cats, name="Ralph"){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(cats, name="Bob"){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveFirstCat(cats){
    cats.shift();
    return cats;
}
function destructivelyRemoveLastCat(cats){
    cats.pop();
    return cats;
}
function appendCat(cats, name="Broom"){
    const newArray1 = [...cats, name];
    return newArray1;
}
function prependCat(cats, name="Arnold"){
    const newArray2 = [name, ...cats];
    return newArray2;
}

function removeLastCat(){
    const newArray3 = cats.slice(0,-1);
    return newArray3;
}

function removeFirstCat(){
    const newArray4 = cats.slice(1);
    return newArray4;
}
