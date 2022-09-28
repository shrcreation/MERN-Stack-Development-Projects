//global constant variable
const addMoviesModal = document.getElementById('add-modal');
const startMoviesBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelMovieModal = addMoviesModal.querySelector('.btn--passive');
const confirmAddMoviesBtn = cancelMovieModal.nextElementSibling;
const userInputs = addMoviesModal.querySelectorAll('input'); //store as an array[index based]
const headerText = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

//toggle(on/of switch) the overly background
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
//toggle(on/of switch) the add movies modal
// const toggleMovieModal = () => {
//   addMoviesModal.classList.toggle('visible');
//   toggleBackdrop();
// };
//update the UI after add or delete movies
const updateUI = () => {
  if (movies.length === 0) {
    headerText.style.display = 'block';
  } else {
    headerText.style.display = 'none';
  }
};
const closeMovieModal = () => {
  addMoviesModal.classList.remove('visible');
  deleteMovieModal.classList.remove('visible');
  toggleBackdrop();
};
//delete movies after find the index
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1); //remove from arrays
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove(); //remove from list
  updateUI(); //update the ui
  closeMovieModal();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
  //recreate the (confirmDeletionBtn) button for get rid of old dom object.
  //deep clone the button
  //swaping the variable
  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
  confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
  //listner
  cancelDeletionBtn.removeEventListener('click', closeMovieModal);
  cancelDeletionBtn.addEventListener('click', closeMovieModal);
  confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
};
//set the movies data into the UI/list
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
  movieLink,
  imdbLink
) => {
  //create UI elements
  const newMovieElement = document.createElement('li');
  const deleteMovieBtn = document.createElement('button');
  const editMovieBtn = document.createElement('button');
  //set values
  deleteMovieBtn.innerText = 'Delete';
  editMovieBtn.innerText = 'Edit';
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
        <span><a href="${imdbLink}" target="_blank">IMDB: ${rating}/10 ✰</a></span>
    </div>`;
  //delete movies by passing the id
  deleteMovieBtn.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement); //append the li into the root (ul)
  newMovieElement.append(deleteMovieBtn, editMovieBtn); //append the extra button into the li
};

const showMovieModal = () => {
  addMoviesModal.classList.add('visible');
  toggleBackdrop();
};
//remove the add movies modal
const backdropClickHandler = () => {
  closeMovieModal();
};
//clear all input by a for loop
const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};
//cancel movie button and remove the add movies modal
//call clear inputs
const cancelMovie = () => {
  closeMovieModal();
  clearMovieInputs();
};
//add movies handler function
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
  const imdbLinkValue = userInputs[9].value;
  //validate the user inputs
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
  } else if (+ratingValue < 1 || +ratingValue > 10) {
    alert('Please enter valid values (rating between 1 and 10).');
    return;
  } else if (trailerValue.trim() === '') {
    alert('Trailer is required!');
    return;
  } else if (movieValue.trim() === '') {
    alert('Movie link is required!');
    return;
  } else if (imdbLinkValue.trim() === '') {
    alert('IMDB link is required!');
    return;
  }
  //create a new movies obj and assign all input values
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
    imdbLink: imdbLinkValue,
  };
  //push the values into the movies arrays
  movies.push(newMovies);
  closeMovieModal(); //remove add movies modal
  clearMovieInputs(); //clear all inputs
  //set the display items values
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
    newMovies.movieLink,
    newMovies.imdbLink
  );
  updateUI(); //update the UI
};
//dummy values start
const dummyMovies = {
  id: '01',
  title: 'Money Heist',
  description: `A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.`,
  year: '2017',
  genres: 'Action, Drama, Crime',
  duration: '1h 10m',
  imageUrl:
    'https://uhdmovies.app/wp-content/uploads/MoneyHeist-NetflixTVShowPosterFanArt_e91469e6-1d4b-4e79-82ce-7c3caa3072af.jpeg',
  rating: '8.2',
  trailer: 'https://www.youtube.com/watch?v=_InqQJRqGW4',
  movieLink: 'https://www.netflix.com/title/80192098',
  imdbLink: 'https://www.imdb.com/title/tt6468322/',
};

movies.push(dummyMovies);
renderNewMovieElements(
  dummyMovies.id,
  dummyMovies.title,
  dummyMovies.description,
  dummyMovies.year,
  dummyMovies.genres,
  dummyMovies.duration,
  dummyMovies.imageUrl,
  dummyMovies.rating,
  dummyMovies.trailer,
  dummyMovies.movieLink,
  dummyMovies.imdbLink
);
updateUI();
//dummy values end

startMoviesBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieModal.addEventListener('click', cancelMovie);
confirmAddMoviesBtn.addEventListener('click', addMovieHandler);
