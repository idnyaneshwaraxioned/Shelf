/* Author: 

*/

function stickynav() {
	let headerNav = document.querySelector('header');
	// console.log(headerNav);
	window.addEventListener('scroll', function () {
		let value = window.scrollY;

		if (value > 424) {
			headerNav.classList.add('active');
		} else {
			headerNav.classList.remove('active');
		}
	})
};
stickynav()



function pagination() {

	let filterBtn = document.querySelectorAll('.filter-control li');
	let imgitem = document.querySelectorAll('.img-item');

	filterBtn.forEach(function (val) {
		val.addEventListener('click', function () {
			filterBtn.forEach(function (elem) {
				elem.classList.remove('active');
			})
			val.classList.add('active');
		})
	});


	filterBtn.forEach(function (val, index) {
		val.addEventListener('click', function () {
			let btnatr = val.getAttribute('data-number');
			imgitem.forEach(function (img) {
				let imgstr = img.getAttribute('data-att')
				if(imgstr===btnatr){
					img.style.display = 'block';
				} else{
					img.style.display = "none";
				}
			});
		})
	});

}
pagination();





















