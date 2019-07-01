function summa() {
	a=document.getElementById("pole").value;
	b=document.getElementById("pole1").value;
	alert(a*1 + b*1)
}

function minus() {
	a=document.getElementById("pole").value;
	b=document.getElementById("pole1").value;
	alert(a*1 - b*1)
}

function multi() {
	a=document.getElementById("pole").value;
	b=document.getElementById("pole1").value;
	alert(a*1 * b*1)
}

function divi() {
	a=document.getElementById("pole").value;
	b=document.getElementById("pole1").value;
	alert(a*1 / b*1)
}

function diviost() {
	a=document.getElementById("pole").value;
	b=document.getElementById("pole1").value;
	alert(a*1 % b*1)
}

function bigger() {
	var a=1*document.getElementById("pole").value;
	var b=1*document.getElementById("pole1").value;
	if (a>b) {
		alert(a + " Наибольшее число ")
	}
	else {
		alert(b + " Наибольшее число ")
	}
}

function poloz() {
	var a=1*document.getElementById("pole").value;
	if (a<0) {
	alert(a + " Отрицательное число ")
	}
	else {
		alert(a + " Положительное число ")
	}
}

function cetny() {
	var b=1*document.getElementById("pole1").value;
	if (b % 2 == 0) {
	alert(b + " Четное число ")
	}
	else {
		alert(b + " Нечетное число ")
	}
}
