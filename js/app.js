let current = 1;
let selectedValue = null;
const sections = document.querySelectorAll('section')
const progressBar = document.getElementById("progressBar")
const buttons = document.querySelectorAll('button');
const line = document.getElementById('line')




buttons.forEach(button => {
	button.addEventListener('click', function (e) {
		event.preventDefault()
	});
});

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
		selectedValue = null
	} else {
		alert('Veuillez sélectionner une option.');
	}
}
function recall() {
	current += 2;
	sections.forEach(btn => {
		btn.classList.remove('active');
	});
	sections[current].classList.add('active')

}

function progress() {
	let width = (current / 5) * 100

	progressBar.style.width = `${width}%`
}

function next() {
	current += 1

	sections.forEach(btn => {
		btn.classList.remove('active');
	});

	if (current == 7) {
		line.style.display = 'none'
	}

	progress()

	sections[current].classList.add('active')

}

function showContent(selectedValue) {
	try {
		progress()

		sections.forEach(btn => {
			btn.classList.remove('active');
		});


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

	} catch (error) {
		throw new Error("Error in showContent");

	}
}


function syncInputs() {
	const code = document.getElementById('Code-Promo').value
	document.getElementById('input-2').value = code

}


function checkForm() {
	var name1 = document.getElementById("name1").value;
	var surname1 = document.getElementById("surname1").value;
	console.log(name1 + surname1);

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var surname = document.getElementById("surname").value;

	if (name !== "" && email !== "" && surname !== "") {
		recall()
	} if (name1 !== "" && surname1 !== "") {
		next()
	} if (name == "" && email == "" && surname == "" && name1 == "" && surname1 == "") {
		alert("Veuillez remplir tous les champs du formulaire.");
	}
}

