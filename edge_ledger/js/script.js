const navbar = document.querySelector('#navbar');
let scrolled = false;
window.onscroll = () => {
	if (window.pageYOffset > 100) {
		navbar.classList.remove('top');
		if (!scrolled) {
			navbar.style.transform = 'translateY(-70px)';
		}
		setTimeout(() => {
			navbar.style.transform = 'translateY(0)';
			scrolled = true;
		}, 1000);
	} else {
		navbar.classList.add('top');
		scrolled = false;
	}
};

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();
		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			800
		);
	}
});
