function SearchBook(e) {
	e.preventDefault();
	let SearchedKey = document.getElementById('search-bar').value;
	let found = false;
	for (let i = 0; i < Books.length; i++) {
		for (let field in Books[i]) {
			let result = Books[i][field].toString().indexOf(SearchedKey);
			if (result != -1) console.log(Books[i][field]);
		}
	}
}
