function ShowBrowse() {
	let browse = document.getElementById('top-menu3-browse');
	let details = document.getElementById('top-menu3-details');

	browse.display = 'block';
	details.display = 'none';
}

function ShowDetails() {
	let details = document.getElementById('top-menu3-details');
	let browse = document.getElementById('top-menu3-browse');
	browse.display = 'none';
	details.display = 'block';
}
