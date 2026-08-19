"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви подивилися?", '');
// let	lastSeen = prompt("Який фільм був останнім?", '');
// let numberOfFilms = prompt("Скільки фільмів ви подивилися?", '');
// let numberOfFilms = prompt("Скільки фільмів ви подивилися?", '');


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


