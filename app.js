//Data Types
/*
	string
	number
	object / array
	boolean
	null
	undefined

	BigInt
	Symbols
 */

const name ='George';
let age = 18;
//const details = `My name is ${name}, I am ${age} years old`; //Temple literal
//console.log(details)

/*
if(name ==='George'){
	console.log(`Hello ${name}`)
} else{
	console.log(`Sussy! Impostor! You are not George!, you are ${name}!`)
}
*/
/*
switch( name ){
	case 'Gordon':
	case 'George':
		console.log(`Hello ${name}!`)
		break;
	default:
		console.log(`Impostor! You are not George! You are ${name}!`)
}
*/
/*
const message = (name) => console.log(name + ': DO NOT THE CAT');
message(name);
*/
/*
function message( name ) {
	console.log(name + ': DO NOT THE CAT')
}
message(name);

 */
/*
const arr1= [name, age, 'Gordon','hello :)'];
const arr2 = ['DO', 'NOT', 'THE', 'CAT'];

for(let index = 0; index < arr1.length; index++) {
	console.log(arr1[index]);
}
const callArray = arr => {
	for(let index = 0; index < arr.length; index++) {
		console.log(arr[index]);
	}
}
callArray(arr1)
callArray(arr2)
*/
/*
const arr3 = ['George', 18, 'Web Developer'];
const obj = {
	name: 'George',
	age: 18,
	jobTitle: 'Web Developer'
}

console.log( obj['name']);
console.log(obj.age);
console.log(obj["jobTitle"]);

for(let key in obj){
	console.log(`${key} : ${obj[key]}`);
}
*/

const shoppingBasket = [
	{ name: "Ketchup", type: "condiment", quantity: 1, price: 1.20 },
	{ name: "Butter", type: "dairy", quantity: 1, price: 1.79 },
	{ name: "Ice Cream", type: "frozen", quantity: 2, price: 2.50 },
	{ name: "Shampoo", type: "toiletries", quantity: 2, price: 3.25 },
	{ name: "Cookies", type: "snacks", quantity: 1, price: 1.19 },
	{ name: "Mustard", type: "condiment", quantity: 1, price: 1.36 },
	{ name: "Lettuce", type: "vegetables", quantity: 2, price: .69 },
	{ name: "Honey", type: "condiment", quantity: 1, price: .89 },
	{ name: "Soup", type: "canned", quantity: 4, price: .99 },
	{ name: "Onions", type: "vegetables", quantity: 3, price: .60 },
	{ name: "Fruit", type: "canned", quantity: 3, price: .49 },
	{ name: "Paper Towels", type: "home", quantity: 2, price: 1.49 },
	{ name: "Conditioner", type: "toiletries", quantity: 2, price: 2.65 },
	{ name: "Milk", type: "dairy", quantity: 6, price: .30 },
	{ name: "Freezer Bags", type: "home", quantity: 10, price: .59 },
	{ name: "Cheese", type: "dairy", quantity: 2, price: 2.24 },
	{ name: "Deodorant", type: "toiletries", quantity: 1, price: 1.56 },
	{ name: "Apples", type: "fruit", quantity: 6, price: .20 },
	{ name: "Broccoli", type: "vegetables", quantity: 1, price: .52 },
	{ name: "Popcorn", type: "snacks", quantity: 3, price: .79 },
	{ name: "Beer", type: "beverages", quantity: 4, price: 1.10 },
	{ name: "Grapes", type: "fruit", quantity: 1, price: 1.20 },
	{ name: "Wine", type: "beverages", quantity: 3, price: 4.99 },
	{ name: "Bananas", type: "fruit", quantity: 6, price: .20 },
	{ name: "Cauliflower", type: "vegetables", quantity: 1, price: .48 },
];


function shoppingTotalPrice(arr) {
	for(let index = 0; index < arr.length; index++) {
		return arr[index].price, arr[index].quantity;
	}
}

console.log(shoppingTotalPrice( shoppingBasket ));
