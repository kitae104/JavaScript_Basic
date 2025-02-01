const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const entryTextSection = document.querySelector('#entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];  // 영화 정보를 저장할 배열

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';   // 영화 정보가 없을 때
    } else {
        entryTextSection.style.display = 'none';    // 영화 정보가 있을 때
    }
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === movieId) {
            movieIndex = movies.indexOf(movie);
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);   // movies 배열에서 해당 인덱스의 요소를 삭제
    const listRoot = document.querySelector('#movie-list'); // ul 엘리먼트 찾기
    listRoot.children[movieIndex].remove();    // ul 엘리먼트에서 해당 인덱스의 li 엘리먼트 삭제
    closeMovieDeletionModal();
};

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton =  deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));  // 이벤트 리스너 중복 등록 방지
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');   // 새로운 li 엘리먼트 생성
    newMovieElement.className = 'movie-element';    // li 엘리먼트에 클래스 추가
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id) )  // 클릭 이벤트 추가

    const listRoot = document.querySelector('#movie-list');  // ul 엘리먼트 찾기
    listRoot.append(newMovieElement);   // ul 엘리먼트에 li 엘리먼트 추가    
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');  // 모달창 숨기기
};

const showMovieModal = () => {
	addMovieModal.classList.add('visible');
	toggleBackdrop();
};

const backdropClickHandler = () => {
	closeMovieModal();
    closeMovieDeletionModal();    
    clearMovieInput();
};

const clearMovieInput = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#image-url').value = '';
    document.querySelector('#rating').value = '';
};

const cancelAndMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

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
        id: Math.random().toString(),
		title: title,
		imageUrl: imageUrl,
		rating: rating,
	};

    movies.push(newMovie);
	console.log(movies);	
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
    updateUI();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAndMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
