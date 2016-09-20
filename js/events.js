function AddEvents() {
	window.addEventListener('resize', Resized);
	document.getElementById('search-bar-form').addEventListener('submit', SearchBook);
	document.getElementById('search-bar-button').addEventListener('click', SearchBook);
	document.getElementById('top-menu2-return').addEventListener('click', SwapToApp1);
}
