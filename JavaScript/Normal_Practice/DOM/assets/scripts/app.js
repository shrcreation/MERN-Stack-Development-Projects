const addMoviesBtn = document.getElementById('addMoviesBtn');


const showModal = () => {
    let modal = document.getElementById('add-modal');
    modal.style.display = 'block';
}


addMoviesBtn.addEventListener('click',showModal);
