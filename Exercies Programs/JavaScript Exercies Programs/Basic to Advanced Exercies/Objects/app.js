const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const createMovieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key} : ${movie.info[key]}`;
      }
    }
    createMovieEl.textContent = text;
    movieList.append(createMovieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return alert('Fields are required!!!');
  }

  const newMovies = {
    id: Math.random(),
    info: {
      title, //key name and value name are same so use 1
      [extraName]: extraValue, //dynamic key name and dynamic value
    },
  };

  movies.push(newMovies);
  renderMovies();
  console.log(movies);
}; //ends addMovieHandler

addMoviesBtn.addEventListener('click', addMovieHandler);
