const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const movies = [];

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
	addMovieModal.classList.toggle('visible');
	toggleBackdrop();
};

const backdropClickHandler = () => {
	toggleMovieModal();
};

const clearMovieInput = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#image-url').value = '';
    document.querySelector('#rating').value = '';
};

const addMovieHandler = () => {
	const title = document.querySelector('#title').value;
	const imageUrl = document.querySelector('#image-url').value;
	const rating = document.querySelector('#rating').value;

	if (
		title.trim() === '' ||
		imageUrl.trim() === '' ||
		rating.trim() === '' ||
		+rating < 1 ||
		+rating > 5
	) {
		alert('Please enter valid values (rating between 1 and 5).');
		return;
	}

	const newMovie = {
		titl: title,
		imageUrl: imageUrl,
		rating: rating,
	};

    movies.push(newMovie);
	console.log(movies);	
    clearMovieInput();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', toggleMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
