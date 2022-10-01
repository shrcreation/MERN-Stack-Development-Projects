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
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovie.forEach((movie) => {
    const createMovieEl = document.createElement('li');
    // if('info' in movie){
    //check the property exits in objects or not
    // }
    const { info, ...otherProps } = movie; //objects destructuring
    //let text = info.title + ' - ';
    let { formattedTitle } = movie;
    //formattedTitle = formattedTitle.bind(movie);
    //let text = movie.formattedTitle() + ' - ';// also work
    let text = formattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key} : ${info[key]}`;
      }
    }
    createMovieEl.textContent = text;
    movieList.append(createMovieEl);
  });
};

const addMovieHandler = () => {
  const movieTitle = document.getElementById('title');
  const extraName = document.getElementById('extra-name');
  const extraValue = document.getElementById('extra-value');

  const title = movieTitle.value;
  const extraNameValue = extraName.value;
  const extraValueValue = extraValue.value;

  if (
    extraNameValue.trim() === '' ||
    extraValueValue.trim() === ''
  ) {
    return alert('Fields are required!!!');
  }

  const newMovies = {
    id: Math.random(),
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraNameValue]: extraValueValue,
    },
    descriptions: {
      title: 'this is a descriptions',
      length: 23,
    },
    rating: [4.5, 5.6, 7.8],
    formattedTitle() {
      //never use arrow function
      // let name = 'SHR';
      // console.log(name);
      return this.info.title.toUpperCase();
    },
  };

  newMovies.info.title = title;
  console.log(newMovies.info.title);
  movies.push(newMovies);
  renderMovies();
  movieTitle.value = '';
  extraName.value = '';
  extraValue.value = '';
}; //ends addMovieHandler

const searchMoviesHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  if (filterTerm.trim() === '') {
    return alert(`Field can't be empty!!`);
  }
  renderMovies(filterTerm);
};

addMoviesBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMoviesHandler);
