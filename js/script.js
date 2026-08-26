//////    MAIN PROJECT    ///////
"use strict";

let numberOfFilms;

function start() {
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви подивилися?", '');
	}
}

start();

let personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Який фільм був останнім?', '').trim(),
			b = +prompt('дайте оцінку', '');
		if (a == null || b == null || a == '' || b == '' || a.length > 50) {
			console.log('error');
			i--;
		} else {
			personalMoviesDB.movies[a] = b;
			console.log('done');
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMoviesDB.count <= 10) {
		console.log(personalMoviesDB.count);
		console.log('Мало фільмів');
	} else if (personalMoviesDB.count > 10 && personalMoviesDB.count <= 30) {
		console.log(personalMoviesDB.count);
		console.log('Ти середній глядач');
	} else if (personalMoviesDB.count > 30 ) {
		console.log(personalMoviesDB.count);
		console.log('Ти кіноман');
	} else {
		console.log('Помилка');
	}
}

detectPersonalLevel();

function whriteMyGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMoviesDB.genres[i - 1] = prompt(`Ваш улюблений жанр ${i}`);
	}
}

whriteMyGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMoviesDB);
	}
}
showMyDB(personalMoviesDB.privat);
//////    MAIN PROJECT    ///////


///////   second test task   //////////////

// function getMathResult(baseNum, count) {
// 	let str = '';
	
// 	if (count < 0 || count === 0 || typeof(count) !== 'number') {
// 		return baseNum;
// 	} else {
// 		for (let i = 1; i <= count; i++) {
// 			if (i === count) {
// 				str += baseNum * i;
// 			} else {
// 				str += baseNum * i + '---';
// 			}
// 		}
// 	}
// 	return str;
// }

// console.log(getMathResult(5, 3));

// //////   second test task      //////////

// //////   triangle with stars      ///////////////

// const lines = 7;
// let spaces = 6;
// let result = '';

// for (let i = 1; i < lines; i++) {
//     for (let j = 0; j < i; j++) {
//         for (spaces; spaces > i; spaces--) {
//             result += ' ';
//         };
// 		result += '*';
// 		if (j > 0) result += '*';
//     };
//     result += '\n';
// 	spaces = 6;
// };
// console.log(result);

//////   triangle with stars    //////////////

// function getTimeFromMinutes(totalMinutes) {
// 	if (!Number.isInteger(totalMinutes) || totalMinutes < 0) {
// 		return "Ошибка, проверьте данные";
// 	}

// 	const hours = Math.floor(totalMinutes / 60),
// 		  minutes = totalMinutes % 60;
// 	let str;

// 	switch (hours) {
// 		case 1: str = 'час';
// 			break;
// 		case 2:
// 		case 3:
// 		case 4: 
// 			str = 'часа';
// 				break;
// 		default: str = 'часов'; 
// 	}

// 	return str = `Это ${hours} ${str} и ${minutes} минут`
// }
// console.log(getTimeFromMinutes(159));

// function findMaxNumber(a, b, c, d) {
// 	if (typeof(a) !== 'number' ||
// 		typeof(b) !== 'number' ||
// 		typeof(c) !== 'number' ||
// 		typeof(d) !== 'number' ||
// 		arguments.length < 4) {
// 			return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }
// console.log(findMaxNumber(1, 4, 2, 5));


function fib (number) {
	let a = 0,
		b = 1;
	let str = '';
	if (typeof(number) !== 'number' || number == 0) {
		return str;
	}
	for (let i = 0; i < number; i++) {
		str += `${i} `;
	}	
	return str;
}
console.log(fib(2));
