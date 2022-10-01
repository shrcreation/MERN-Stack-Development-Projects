const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const addMovieHandler = () => {
  const movieTitle = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    movieTitle.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return alert('Fields are required!!!');
  }

  const newMovies = {
    id: Math.random(),
    info: {
      movieTitle, //key name and value name are same so use 1
      [extraName]: extraValue, //dynamic key name and dynamic value
    },
  };
}; //ends addMovieHandler

addMoviesBtn.addEventListener('click', addMovieHandler);
