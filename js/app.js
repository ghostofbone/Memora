let current = 1;
let selectedValue = null;
const sections = document.querySelectorAll('section')
function selectOption(element) {
	// Видаляємо клас "selected" з усіх кнопок
	document.querySelectorAll('.form--select__select').forEach(btn => {
		btn.classList.remove('selected');
	});

	// Додаємо клас "selected" на натиснуту кнопку
	element.classList.add('selected');

	// Зберігаємо вибране значення
	selectedValue = element.getAttribute('data-value');
}
function continueProcess() {
	if (selectedValue) {
		showContent(selectedValue)
	} else {
		alert('Будь ласка, виберіть варіант.');
	}
}
function recall() {
	current += 2;
	sections.forEach(btn => {
		btn.classList.remove('active');
	});
	sections[current].classList.add('active')

}

function next() {
	current += 1
	console.log('next has been called' + current);
	sections.forEach(btn => {
		btn.classList.remove('active');
	});
	sections[current].classList.add('active')

}

function showContent(selectedValue) {
	sections.forEach(btn => {
		btn.classList.remove('active');
	});
	console.log(selectedValue);
	console.log(current);

	if (selectedValue == 'self') {
		sections[sections.length - 1].classList.add('active')
	} if (selectedValue == 'other') {
		sections.forEach(btn => {
			btn.classList.remove('active');
		});
		next()
	} if (selectedValue == 'me') {
		sections.forEach(btn => {
			btn.classList.remove('active');
		});
		next()
	} if (selectedValue == 'them') {
		sections.forEach(btn => {
			btn.classList.remove('active');
		});
		recall()
	}

	else {
		console.log('error');

	}
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
	button.addEventListener('click', function (e) {
		event.preventDefault()
	});
});


