//////    MAIN PROJECT    ///////
"use strict";

let numberOfFilms;

function start() {
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви подивилися?", '');
	}
}

// start();

let personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Який фільм був останнім?', ''),
			b = +prompt('дайте оцінку', '');
		if (a == null || b == null || a == '' || b == '' || a.length > 50) {
			i--;
		} else {
			personalMoviesDB.movies[a] = b;
		}
	}
}

// rememberMyFilms();

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

// detectPersonalLevel();

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