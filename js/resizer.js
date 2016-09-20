var Olds = {
	'WW680+': null,
	'WH800+': null
};

function Resized() {
	if (ActiveApp == 1) {
		if (window.innerWidth < 680 && Olds['WW680+'] !== false) {
			document.getElementById('top-menu-logo-secondary').style.display = 'none';
			document.getElementById('top-menu-logo').style.textAlign = 'center';
			document.getElementById('top-menu-logo').style.left = '0';
		} else if (window.innerWidth >= 680 && Olds['WW680+'] !== true) {
			document.getElementById('top-menu-logo-secondary').style.display = 'block';
			document.getElementById('top-menu-logo').style.textAlign = 'left';
			document.getElementById('top-menu-logo').style.left = '64px';
		}
		Olds['WW680+'] = (window.innerWidth >= 680);
		if (window.innerHeight < 800 && Olds['WH800+'] !== false) {
			document.getElementById('search-wrapper').style.marginTop = '100px';
		} else if (window.innerHeight >= 800 && Olds['WH800+'] !== true) {
			document.getElementById('search-wrapper').style.marginTop = '300px';
		}
		Olds['WH800+'] = (window.innerHeight >= 800);
	} else if (ActiveApp == 2) {

	}
}
