"use strict"

// active tablink

function openItem(evt, item) {

	let i, tablinks, displayBlock;
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	let nameItem = ['Tasks', 'Kanban', 'Activity', 'Calendar', 'Files'];
	displayBlock = document.getElementById(item);
	for (i = 0; i < nameItem.length; i++) {
		document.getElementById(nameItem[i]).className = document.getElementById(nameItem[i]).className.replace(" active", "");
	}


	displayBlock.className += " active";
	evt.currentTarget.className += " active";

}

// active menu class

let visibility = false;
function openMenu(evt, item) {

	let i, link;
	link = document.getElementsByClassName("item-header__button");

	for (i = 0; i < link.length; i++) {
		link[i].className = link[i].className.replace(" active", "");
	}

	if (visibility) {
		document.getElementById(item).style.display = 'none';
		visibility = false;
	} else {
		document.getElementById(item).style.display = 'block';
		visibility = true;
		evt.currentTarget.className += " active";
	}
}

// pop-up window tasks

let openWindow = false;
function tasks() {
	if (openWindow) {
		document.getElementsByClassName("popup-window")[0].style = "display: none";
		openWindow = false;
	} else {
		document.getElementsByClassName("popup-window")[0].style = "display: flex";
		document.getElementsByClassName("popup-window__buttons")[0].style = "display: flex";
		document.getElementById("text").innerHTML = "Are you sure you want to change the number of tasks?";
		openWindow = true;
	}
}

// answer button

let button;
function buttonYes() {
	document.getElementsByClassName("popup-window__button_true")
	button = true;
	setTimeout(() => document.getElementsByClassName("popup-window")[0].style = "display: none", 2000);
	openWindow = false;
}
function buttonNo() {
	document.getElementsByClassName("popup-window__button_false")
	button = false;
	setTimeout(() => document.getElementsByClassName("popup-window")[0].style = "display: none", 2000);
	openWindow = true;
}

// task check

function answerQuestion() {

	let i = 0;

	let openTask = document.getElementById("openTask");
	openTask.innerHTML = parseInt(openTask.innerHTML, 10);

	let completedTask = document.getElementById("completedTask");
	completedTask.innerHTML = parseInt(completedTask.innerHTML, 10);

	let textWindow = document.getElementById("text");

	if (button == true && (i < openTask.innerHTML)) {
		openTask.innerHTML--;
		completedTask.innerHTML++;
		textWindow.innerHTML = "Well done, you have completed the task.";
		document.getElementsByClassName("popup-window__text")[0].style = "height: 100%";
		document.getElementsByClassName("popup-window__buttons")[0].style = "display: none";

	}
	else if (button == true && (i = openTask.innerHTML)) {
		textWindow.innerHTML = "Sorry, but all tasks have already been completed.";
		document.getElementsByClassName("popup-window__buttons")[0].style = "display: none";
		document.getElementsByClassName("popup-window__text")[0].style = "height: 100%";
	}
	else if (button == false) {
		textWindow.innerHTML = "Come back when you complete the tasks.";
		document.getElementsByClassName("popup-window__buttons")[0].style = "display: none";
		document.getElementsByClassName("popup-window__text")[0].style = "height: 100%";
	}
}



// loading pictures on the page


let images = [{ "src": 'img/photo1.png' }, { "src": 'img/photo2.png' }, { "src": 'img/photo3.png' }, { "src": 'img/photo4.png' }];
const cont = document.getElementById("images");
images.forEach(function (par) {
	cont.innerHTML += `<img src="${par.src}" alt="#">`;
});

// notification counter

let wrapper = document.getElementById("images");
let notification = document.getElementById("notification");
wrapper.addEventListener('click', function (evt) {
	let index = [...this.children].findIndex(el => el == evt.target)
	notification.innerHTML = index;
})