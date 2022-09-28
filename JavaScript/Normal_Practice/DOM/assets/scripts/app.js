//global constant variable
const addMoviesModal = document.getElementById('add-modal');
const startMoviesBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelMovieModal = addMoviesModal.querySelector('.btn--passive');
const confirmAddMoviesBtn = cancelMovieModal.nextElementSibling;
const userInputs = addMoviesModal.querySelectorAll('input'); //store as an array[index based]
const headerText = document.getElementById('entry-text');
const movies = [];

//update the UI after add or delete movies
const updateUI = () => {
  if (movies.length === 0) {
    headerText.style.display = 'block';
  } else {
    headerText.style.display = 'none';
  }
};
//delete movies after find the index
const deleteMovieHandler = (movieId) => {
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
        <span><a href="${imdbLink}" target="_blank">${rating}/10 stars</a></span>
    </div>`;
  //delete movies by passing the id
  deleteMovieBtn.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement); //append the li into the root (ul)
  newMovieElement.append(deleteMovieBtn, editMovieBtn); //append the extra button into the li
};
//toggle(on/of switch) the overly background
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
//toggle(on/of switch) the add movies modal
const toggleMovieModal = () => {
  addMoviesModal.classList.toggle('visible');
  toggleBackdrop();
};
//remove the add movies modal
const backdropClickHandler = () => {
  toggleMovieModal();
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
  toggleMovieModal();
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
  toggleMovieModal(); //remove add movies modal
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
  title: 'The Gray Man',
  description: `When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.`,
  year: '2022',
  genres: 'Action, Drama, Thriller',
  duration: '2h 2m',
  imageUrl:
    'https://seuladogeek.com.br/wp-content/uploads/2022/05/The-Gray-Man-Movie.jpg',
  rating: '6.5',
  trailer: 'https://www.youtube.com/watch?v=BmllggGO4pM',
  movieLink: 'https://roshiya.me/tag/index-of-the-gray-man-2022/',
  imdbLink: 'https://www.imdb.com/title/tt1649418/',
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

startMoviesBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieModal.addEventListener('click', cancelMovie);
confirmAddMoviesBtn.addEventListener('click', addMovieHandler);
