"use strict"

let visible = false;
let visibility = false;
var i, tablinks;



function openItem(evt, item) {
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	if (visible) {
		document.getElementById(item).style.display = 'none';
		visible = false;
	} else {
		document.getElementById(item).style.display = 'block';
		visible = true;
		evt.currentTarget.className += " active";
	}


}




function openMenu(evt, item) {
	tablinks = document.getElementsByClassName("item-header__button");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
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
