function SearchBook(e) {
	e.preventDefault();
	let SearchedBook = DOMsearchbar.value;
	let i;
	for (i = 0; i < Books.length; i++) {
		if (Books[i].title == SearchedBook) {
			LoadBook(i);
			break;
		}
	}
	if (i == Books.length) {
		DOMsearchbarresult.style.opacity = 1;
		if (AnimatableResult) {
			AnimatableResult = false;
			TweenLite.to(DOMsearchbarresult, 4, {
				opacity: 0,
				onComplete: function() {
					AnimatableResult = true;
				}
			});
		}
	}
}

function LoadBook(i) {
	console.log(i);
	SwapToApp2();
	document.getElementById('book-info-cover-img').src = Books[i].cover;
	document.getElementById('book-info-text-title-value').innerHTML = Books[i].title;
	document.getElementById('book-info-text-author-value').innerHTML = Books[i].author;
	document.getElementById('book-info-text-price-value').innerHTML = Books[i].price;
	document.getElementById('book-info-text-isbn-value').innerHTML = Books[i].ISBN;
	document.getElementById('book-info-text-format-value').innerHTML = Books[i].format;
	document.getElementById('book-info-text-pages-value').innerHTML = Books[i].pages;
	document.getElementById('book-info-text-description-value').innerHTML = Books[i].description;
}
