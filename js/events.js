function AddEvents() {
	window.addEventListener('resize', Resized);
	document.getElementById('search-bar-form').addEventListener('submit', SearchBook);
	document.getElementById('search-bar-button').addEventListener('click', SearchBook);
}
