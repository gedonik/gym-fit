//questions
const btns = document.querySelectorAll('.questions__btn');

function accordion() {
	this.classList.toggle('is-open');
	const content = this.nextElementSibling;
	if (content.style.maxHeight) content.style.maxHeight = null;
	else content.style.maxHeight = content.scrollHeight + 'px';
}
btns.forEach((el) => el.addEventListener('click', accordion));

//popup
function customPopup() {
	let $btnShowPopup = $('.header__btn');
	let $btnClosePopup = $('.popup__close');
	let $popup = $('.popup');

	$btnShowPopup.on('click', function () {
		let targetPopup = $(this).attr('data-target');
		$('[data-popup=' + targetPopup + ']').addClass('is-visible');
	});

	$btnClosePopup.on('click', function () {
		$(this).parents('.is-visible').removeClass('is-visible');
	});

	$popup.on('click', function (event) {
		if (
			!$(event.target).closest('.popup__inner').length &&
			!$(event.target).is('.popup')
		) {
			if ($popup.hasClass('is-visible')) {
				$popup.removeClass('is-visible');
			}
		}
	});
}
customPopup();

//scroll by id
$(function () {
	$('.menu__list a').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate(
			{
				scrollTop: top,
			},
			1500
		);
	});

	//burger
	$('.menu__burger').on('click', function () {
		$('.menu__hidden').toggleClass('menu__hidden--active');
		if (!$('.menu__btn').hasClass('active')) {
			$('.menu__btn').html('Navigation');
		} else {
			$('.menu__btn').html('Menu');
		}
		$('.menu__btn').toggleClass('active');
		$('.menu__burger').toggleClass('active');
	});

	//timetable
	const arr = [
		'.category-a, ',
		'.category-b, ',
		'.category-c, ',
		'.category-d, ',
		'.category-e, ',
	];

	const querySelector = (key) => {
		return document
			.querySelector(`.timetable__btn-${key}`)
			.classList.contains('active');
	};

	const category = (key) => {
		const newCategory = arr.filter((e) => e != `.category-${key}, `).join('');
		return newCategory.substring(0, newCategory.length - 2);
	};

	var buttons = document.querySelectorAll('.timetable__btn');

	for (var button of buttons) {
		button.addEventListener('click', function () {
			buttons.forEach((i) => i.classList.remove('active'));
			this.classList.toggle('active');
			if (querySelector('all')) {
				$(category('')).css('opacity', '1');
			}
			if (querySelector('mix-1')) {
				$(category('a')).css('opacity', '0');
			} else {
				$(category('a')).css('opacity', '1');
			}
			if (querySelector('mix-2')) {
				$(category('b')).css('opacity', '0');
			} else {
				$('.category-a').css('opacity', '1');
			}
			if (querySelector('mix-3')) {
				$(category('c')).css('opacity', '0');
			}
			if (querySelector('mix-4')) {
				$(category('d')).css('opacity', '0');
			}
			if (querySelector('mix-5')) {
				$(category('e')).css('opacity', '0');
			}
		});
	}

	//nutrition
	$('.nutrition__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

//to-top button
window.onload = () => {
	window.onscroll = function (e) {
		let winY = window.scrollY;
		if (winY > 300) {
			ProgressBar();

			scrollbarAnimation();

			winY = null;
		}
	};

	const scrollBtn = document.querySelector('.to-top');

	window.onscroll = () => {
		if (window.scrollY > 700) {
			scrollBtn.classList.add('to-top--show');
		} else if (window.scrollY < 700) {
			scrollBtn.classList.remove('to-top--show');
		}
	};

	scrollBtn.onclick = () => {
		window.scrollTo(0, 0);
	};
};
