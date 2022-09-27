//global constant variable
const addMoviesModal = document.getElementById('add-modal');
const startMoviesBtn = document.querySelector('header button');
//
const mTitle = document.getElementById('title');
const mDescription = document.getElementById('description');
const mYear = document.getElementById('year');
const mDuration = document.getElementById('duration');
const mGenres = document.getElementById('genres');
const mImage = document.getElementById('image-url');
const mRating = document.getElementById('rating');
const mTrailerLink = document.getElementById('trailer-link');
const mMovieLink = document.getElementById('movie-link');

const backdrop = document.getElementById('backdrop');
const cancelMovieModal = addMoviesModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
const toggleMovieModal = () => {
  addMoviesModal.classList.toggle('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const cancelMovie = () => {
  toggleMovieModal();
};

startMoviesBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieModal.addEventListener('click', cancelMovie);
