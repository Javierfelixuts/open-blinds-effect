window.onload = function(){
	var slideEfect = document.querySelectorAll('.slideEfect');
	var efect = document.querySelector('.efect');

	for (var i = 0;  i < slideEfect.length; i++) {
		slideEfect[i].style.height = '0%';
	}
	setTimeout(function(){
		efect.style.display = 'none';
	}, 1000);
}