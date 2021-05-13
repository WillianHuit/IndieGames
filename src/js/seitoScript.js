let maxSize = 800;
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
//let img6 = document.getElementById('stars'); <- You can add more layers
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');


window.addEventListener('scroll',function(){
	
	let value = window.scrollY;
	if(value<maxSize){
		img1.style.top = value * 1 + 'px';
		img2.style.left = -value * 0.5 + 'px';
		img3.style.top = value * 0.5 + 'px';
		img4.style.top = value * 0.2 + 'px';
		img5.style.top = value * 0.1 + 'px';

		text.style.marginTop = value * 0.5 + 'px';
		btn.style.marginTop = value * 1.5 + 'px';
		header.style.top = value * 0.5 + 'px';
	}
});