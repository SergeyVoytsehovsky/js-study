"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви подивилися?", '');

let personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastFilm_1 = prompt("Який фільм був останнім?", '');
personalMoviesDB.movies[lastFilm_1] = +prompt('дайте оцінку', '');
let lastFilm_2 = prompt("Який фільм був останнім?", '');
personalMoviesDB.movies[lastFilm_2] = +prompt('дайте оцінку', '');

console.log(personalMoviesDB);








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