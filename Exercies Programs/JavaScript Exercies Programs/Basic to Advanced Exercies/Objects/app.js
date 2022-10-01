const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie) => movie.info.titleValue.includes(filter));

  filteredMovie.forEach((movie) => {
    const createMovieEl = document.createElement('li');
    const { info, ...otherProps } = movie; //objects destructuring
    console.log(otherProps);
    let text = info.titleValue + ' - ';
    for (const key in info) {
      if (key !== 'titleValue') {
        text = text + `${key} : ${info[key]}`;
      }
    }
    createMovieEl.textContent = text;
    movieList.append(createMovieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title');
  const extraName = document.getElementById('extra-name');
  const extraValue = document.getElementById('extra-value');

  const titleValue = title.value;
  const extraNameValue = extraName.value;
  const extraValueValue = extraValue.value;

  if (
    titleValue.trim() === '' ||
    extraNameValue.trim() === '' ||
    extraValueValue.trim() === ''
  ) {
    return alert('Fields are required!!!');
  }

  const newMovies = {
    id: Math.random(),
    info: {
      titleValue, //key name and value name are same so use 1
      [extraNameValue]: extraValueValue, //dynamic key name and dynamic value
    },
    descriptions: {
      titleValue: 'this is a descriptions',
      length: 23,
    },
    rating: [4.5, 5.6, 7.8],
    cast: () => {
      let name = 'SHR';
      console.log(name);
    },
  };
  movies.push(newMovies);
  renderMovies();
  title.value = '';
  extraName.value = '';
  extraValue.value = '';
}; //ends addMovieHandler

const searchMoviesHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMoviesBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMoviesHandler);
