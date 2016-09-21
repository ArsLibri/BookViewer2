function SearchBook(e) {
	e.preventDefault();
	let FoundBooks = [];
	let SearchedKey = document.getElementById('search-bar').value;
	let found = false;
	for (let i = 0; i < Books.length; i++) {
		for (let field in Books[i]) {
			if (field != 'cover' && field != 'url') {
				let result = Books[i][field].toString().indexOf(SearchedKey);
				if (result != -1) {
					FoundBooks.push(i);
					break;
				}
			}
		}
	}
	if (FoundBooks.length == 0) {
		if (ResultAnimation != null) ResultAnimation.kill();
		DOMsearchbarresult.style.opacity = 1;
		ResultAnimation = TweenLite.to(DOMsearchbarresult, 4, {
			opacity: 0,
			onComplete: function() {
				ResultAnimation = null;
			}
		});

	} else {
		DOMsearchresults.innerHTML = '';
		for (let i = 0; i < FoundBooks.length; i++) {
			/*<li class='search-results-item'>
					<img src='http://edituraarslibri.ro/media/catalog/product/t/e/teste_de_evaluare_cls_2_1.jpg' height='100px' class='search-results-item-image'>
					<div class='search-results-item-text'>
							<p class='search-results-item-text-title'>Test Book</p>
							<p class='search-results-item-text-author'>AUTHORS AUTHORS AUTHORS AUTHORS</p>
					</div>
			</li>*/
			let li = document.createElement('li');
			li.setAttribute('class', 'search-results-item');
			li.setAttribute('book-id', FoundBooks[i]); {
				let img = document.createElement('img');
				img.setAttribute('src', Books[FoundBooks[i]].cover);
				img.setAttribute('height', '100px');
				img.setAttribute('class', 'search-results-item-image');
				li.appendChild(img);
			} {
				let div = document.createElement('div');
				div.setAttribute('class', 'search-results-item-text');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				p1.setAttribute('class', 'search-results-item-text-title');
				p2.setAttribute('class', 'search-results-item-text-author');
				p1.innerHTML = Books[FoundBooks[i]].title;
				p2.innerHTML = Books[FoundBooks[i]].author.join(', ');
				div.appendChild(p1);
				div.appendChild(p2);
				li.appendChild(div);
			}
			li.addEventListener('click', function() {
				OpenBook(this.getAttribute('book-id'));
			});
			DOMsearchresults.appendChild(li);
		}
		DOMsearchbar.blur();
		SwapToApp2();
	}
}
