const investor = [
	{ first: 'Martin', last: 'Ivanko', year: 1992, passed: 2092 },
	{ first: 'Ondrej', last: 'Stefanko', year: 1991, passed: 3000 },
	{ first: 'Martin', last: 'Kovac', year: 1800, passed: 1937 },
	{ first: 'Michal', last: 'Vyskocil', year: 1599, passed: 1788 },
];
const people = [
	'Ivanko, Martin',
	'Stefanko, Ondrej',
	'Kovac, Martin',
	'Vyskocil, Michal',
];

// array.prototype.filter()
// 1) filter the list of investor for those who were born in 1900`s
let firstTask = investor.filter(singleInvestor => singleInvestor.year >= 1900);
console.log(firstTask);

// array.prototype.map()
//  2) Give us an array of investor first and last names
let secondTask = investor.map(singleInvestor => singleInvestor.first + ' ' + singleInvestor.last);
console.log(secondTask);

// array.prototype.sort()
//  3) Sort the investor by birthday, oldest to youngest
let thirdTask = investor.sort(function (a, b) {
  return a.year - b.year;
});

console.log(thirdTask);

// array.prototype.reduce()
//  4) how many years did all investors live?

let fourthTask = investor.reduce(function (previousValue, currentValue) {
	return previousValue + (currentValue.passed - currentValue.year);
}, 0);
console.log(fourthTask);


// 5) Sort the investor by years lived
let fifthTask = investor.sort(function (a, b) {
  return (a.passed - a.year) - (b.passed - b.year);
});

console.log(fifthTask);

// 6)create a list of Boulevards in Paris that contain "de" anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


document.getElementById("content").innerHTML='<object type="text/html" data="https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris" ></object>';

window.location.href = "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";
let allBoulevards = document.querySelectorAll('.mw-category-group li > a');
console.log(allBoulevards); 

// 7) Sort Exercice
// sort people alphabetically by last name

// reduce
// 8) Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'car',
	'car',
	'truck',
	'car',
	'truck',
];

/* 9) zadanie
	
	1) vytvorte class Employee
	2) jeho properties budu: titul, meno, vek, pozicia
	3) pouzije sa getter pre vytvoreni stringu, kde sa spoji titul s menom {fullName}
	4) method ourEmployee() vracia: {fullname} pracuje na pozicii {position} a ma {age}.

	5) vytvorim si pole so zamestancami, kde pouzijem class Employee, a pridam si troch zamestancov
	6) vytvorim si funkciu, do ktorej si poslem funckiu, prejde mi zoznam zamestancov, najde spravneho a pouzije funkcu ourEmployee()
 */
