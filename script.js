console.log('See on minu teade!');
let num = 1;
const pi = 3.141595;
var num2 = 2; // Hoisting
console.log(typeof num);
console.log(typeof pi);


let text = 'Hello world';
text = "Hello World";
text = `Hollo World 
and pi ios ${pi}`; // kui kasutada neid, siis saab teha mitmerealisi tekste ning lisada muutujaid
console.log(text);
let bool = true;
bool = false;
console.log(bool);

let undef;
console.log(undef)
let nil = null;
console.log(nil);
nil = undefined;
console.log(nil);

num = 1/0;
console.log(num); //Infinity
num = -1/0;
console.log(num);
num = Math.sqrt(-1); // NaN not a number
console.log(num);
num = 0 * -1;
console.log(num);
num = 0.1 + 0.2;
console.log(num);

let array = [1, 2, 3, 'hasd', true];
array.push('dghsf');
console.log(array)
console.log(array[3])

let obj = {
    name: 'Kaspar',
    age: 40,
    cats: ['nublu', 'miisu'],
    address: {
        City: 'Tallinn',
        street: 'Sõle',
    },
    'to-do': 'Stuff',
    'anything goes': true,
}

console.log(obj);
console.log(obj.cats);
console.log(obj['to-do']);
let func = function (){
    console.log('Hello World');
}

let func3 = () => console.log('Hello world');
let func4 = () => {
    console.log('Tere console log');
}