function ShowApp() {
	TweenLite.to(DOMapp1, 1, {
		opacity: 1
	});
}

function SwapToApp2() {
	if (ActiveApp == 1) {
		TweenLite.to(DOMapp1, 1, {
			left: '-100%',
			right: '100%'
		});
	} else if (ActiveApp == 3) {
		DOMapp3.style.right = '-100%';
		TweenLite.to(DOMapp3, 1, {
			left: '100%'
		});
	}

	TweenLite.to(DOMapp2, 1, {
		left: '0',
		right: '0',
		onComplete: Resized
	});
	ActiveApp = 2;
}

function SwapToApp1() {
	TweenLite.to(DOMapp2, 1, {
		right: '-100%',
		left: '100%'
	});
	TweenLite.to(DOMapp1, 1, {
		left: '0',
		right: '0',
		onComplete: Resized
	});
	ActiveApp = 1;
}

function SwapToApp3() {
	TweenLite.to(DOMapp2, 1, {
		left: '-100%',
		right: '100%'
	});
	TweenLite.to(DOMapp3, 1, {
		left: '0',
		right: '0',
		onComplete: Resized
	});
	ActiveApp = 3;
}
