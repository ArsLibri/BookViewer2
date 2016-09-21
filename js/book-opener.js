function OpenBook(i) {
	document.getElementById('eal-link').setAttribute('href', Books[i].url);
	document.getElementById('app3-details-title').innerHTML = Books[i].title;
	document.getElementById('app3-details-author').innerHTML = Books[i].author;
	document.getElementById('app3-details-price').innerHTML = Books[i].price;
	document.getElementById('app3-details-isbn').innerHTML = Books[i].ISBN;
	document.getElementById('app3-details-format').innerHTML = Books[i].format;
	document.getElementById('app3-details-pages').innerHTML = Books[i].pages;
	document.getElementById('app3-details-description').innerHTML = Books[i].description; {
		let adc = document.getElementById('app3-details-cover')
		adc.style.backgroundImage = "url('" + Books[i].cover + "')";
		adc.style.backgroundPosition = 'center ' + Books[i].coverInfoTop + 'px';
	}
	SwapToApp3();
}
