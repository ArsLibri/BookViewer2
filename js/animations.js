function ShowApp() {
	TweenLite.to(DOMapp1, 1, {
		opacity: 1
	});
}

function SwapToApp2() {
	ActiveApp = 2;
	TweenLite.to(DOMapp1, 1, {
		right: '100%'
	});
	TweenLite.to(DOMapp2, 1, {
		left: 0,
		onComplete: Resized
	});
}

function SwapToApp1() {
	ActiveApp = 1;
	TweenLite.to(DOMapp1, 1, {
		right: 0
	});
	TweenLite.to(DOMapp2, 1, {
		left: '100%',
		onComplete: Resized
	});
}
