//global constant variable
const addMoviesModal = document.getElementById('add-modal');
const startMoviesBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelMovieModal = addMoviesModal.querySelector('.btn--passive');
const confirmAddMoviesBtn = cancelMovieModal.nextElementSibling;
const userInputs = addMoviesModal.querySelectorAll('input');
const headerText = document.getElementById('entry-text');
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    headerText.style.display = 'block';
  } else {
    headerText.style.display = 'none';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
};

const renderNewMovieElements = (
  id,
  title,
  description,
  year,
  genres,
  duration,
  imageUrl,
  rating,
  trailer,
  movieLink
) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${description}</p>
        <h3>Year: ${year}</h3>
        <h3>Genres: ${genres}</h3>
        <h3>Duration: ${duration}</h3>
        <a href="${trailer}" target="_blank">Trailer</a>
        </br>
        </br>
        <a href="${movieLink}" target="_blank">Watch Now</a>
        </br>
        </br>
        <span>${rating}/5 stars</span>
    </div>`;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

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

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelMovie = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const descriptionValue = userInputs[1].value;
  const yearValue = userInputs[2].value;
  const genresValue = userInputs[3].value;
  const durationValue = userInputs[4].value;
  const imageUrlValue = userInputs[5].value;
  const ratingValue = userInputs[6].value;
  const trailerValue = userInputs[7].value;
  const movieValue = userInputs[8].value;

  if (titleValue.trim() === '') {
    alert('Title is required!');
    return;
  } else if (descriptionValue.trim() === '') {
    alert('Description is required!');
    return;
  } else if (yearValue.trim() === '') {
    alert('Year is required!');
    return;
  } else if (genresValue.trim() === '') {
    alert('Genres is required!');
    return;
  } else if (durationValue.trim() === '') {
    alert('Duration is required!');
    return;
  } else if (imageUrlValue.trim() === '') {
    alert('Image is required!');
    return;
  } else if (ratingValue.trim() === '') {
    alert('Rating is required!');
    return;
  } else if (+ratingValue < 1 || +ratingValue > 5) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  } else if (trailerValue.trim() === '') {
    alert('Trailer is required!');
    return;
  } else if (movieValue.trim() === '') {
    alert('Movie link is required!');
    return;
  }

  const newMovies = {
    id: Math.random().toString(),
    title: titleValue,
    description: descriptionValue,
    year: yearValue,
    genres: genresValue,
    duration: durationValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
    trailer: trailerValue,
    movieLink: movieValue,
  };
  movies.push(newMovies);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElements(
    newMovies.id,
    newMovies.title,
    newMovies.description,
    newMovies.year,
    newMovies.genres,
    newMovies.duration,
    newMovies.imageUrl,
    newMovies.rating,
    newMovies.trailer,
    newMovies.movieLink
  );
  updateUI();
};

startMoviesBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieModal.addEventListener('click', cancelMovie);
confirmAddMoviesBtn.addEventListener('click', addMovieHandler);
